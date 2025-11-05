package studio.arinova.artecommerce.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import studio.arinova.artecommerce.dto.CustomerSignupDTO;
import studio.arinova.artecommerce.dto.OtpDTO;
import studio.arinova.artecommerce.model.Customer;
import studio.arinova.artecommerce.repository.CustomerRepositoryImpl;
import studio.arinova.artecommerce.service.mail.MailService;
import studio.arinova.artecommerce.utility.GeneralUtility;
import studio.arinova.artecommerce.utility.MailUtility;

import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@Service
@RequiredArgsConstructor
@Slf4j
public class SignupService {

    // If multiple threads are willing to access it made this as concurrent hash map.
    private final Map<String, CustomerSignupDTO> persistanceStorage = new ConcurrentHashMap<>();
    private final Map<String, String> otpPersistenceStorage = new ConcurrentHashMap<>();
    private final CustomerRepositoryImpl customerRepository;
    private final GeneralUtility generalUtility;
    private final PasswordEncoder passwordEncoder;
    private final MailUtility mailUtility;
    private final MailService mailService;

    public ResponseEntity<?> signupHandlerCustomer(CustomerSignupDTO customerSignupDTO) {
        // Here we have to firstly check that if any user doesn't exist by the email.
        // If it does then we will return a bad request response.
        Customer customer = customerRepository.findByEmail(customerSignupDTO.getEmail());
        if (customer != null) {
            return ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body(Map.of("response", "User already exists by the email."));
        }

        // If not we have to send the otp to the email till then have to save the user
        // in memory.
        persistanceStorage.put(customerSignupDTO.getEmail(), customerSignupDTO);

        // Now we have to send the otp will do that task later.
        String otp = generalUtility.generateOTP();
        // log.info("OTP is {}", otp);

        // Sending OTP.
        String mailBody = mailUtility.createOTPMessage(customerSignupDTO.getName(), otp);
        if (!mailService.sendMail(customerSignupDTO.getEmail(), "One Time Password", mailBody)) {
            return ResponseEntity
                    .badRequest()
                    .body("Failed to send the otp, try again later");
        }

        log.info("OTP has been successfully sent to the person's email: {}", customerSignupDTO.getEmail());

        // Setting the otp.
        otpPersistenceStorage.put(customerSignupDTO.getEmail(), otp);

        return ResponseEntity
                .ok(Map.of(
                        "response", "OTP sent successfully to the email"
                ));
    }

    public ResponseEntity<?> otpValidation(OtpDTO otpDTO) {
        String storedOTP = otpPersistenceStorage.get(otpDTO.getEmail());
        if (!storedOTP.equals(otpDTO.getOtp().trim())) {
            return ResponseEntity.ok(Map.of(
                    "response", "OTP is invalid"
            ));
        }

        // If the otp is valid we need to save the user in the db.
        CustomerSignupDTO customerSignupDTO = persistanceStorage.get(otpDTO.getEmail());

        Customer customer = mapToCustomer(customerSignupDTO);

        if (customerRepository.save(customer) == null) {
            return ResponseEntity
                    .status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of(
                            "response", "Failed to create the customer entity."
                    ));
        }

        return ResponseEntity.
                status(HttpStatus.CREATED)
                .body(Map.of(
                        "response", "Customer User has been created successfully."
                ));
    }

    private Customer mapToCustomer(CustomerSignupDTO customerSignupDTO) {
        return Customer
                .builder()
                .id(generalUtility.generateIdForCustomer())
                .email(customerSignupDTO.getEmail())
                .name(customerSignupDTO.getName())
                .password(passwordEncoder.encode(customerSignupDTO.getPassword()))
                .build();
    }

}
