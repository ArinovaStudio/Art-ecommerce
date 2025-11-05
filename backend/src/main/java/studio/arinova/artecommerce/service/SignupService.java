package studio.arinova.artecommerce.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import studio.arinova.artecommerce.dto.SignupDTO;
import studio.arinova.artecommerce.dto.OtpDTO;
import studio.arinova.artecommerce.model.User;
import studio.arinova.artecommerce.repository.UserRepositoryImpl;
import studio.arinova.artecommerce.service.mail.MailService;
import studio.arinova.artecommerce.utility.GeneralUtility;
import studio.arinova.artecommerce.utility.MailUtility;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@Service
@RequiredArgsConstructor
@Slf4j
public class SignupService {

    // If multiple threads are willing to access it made this as concurrent hash map.
    private final Map<String, SignupDTO> persistanceStorage = new ConcurrentHashMap<>();
    private final Map<String, String> otpPersistenceStorage = new ConcurrentHashMap<>();
    private final UserRepositoryImpl userRepository;
    private final GeneralUtility generalUtility;
    private final PasswordEncoder passwordEncoder;
    private final MailUtility mailUtility;
    private final MailService mailService;

    public ResponseEntity<?> signupHandlerCustomer(SignupDTO signupDTO) {
        // Here we have to firstly check that if any user doesn't exist by the email.
        // If it does then we will return a bad request response.
        User user = userRepository.findByEmail(signupDTO.getEmail());
        if (user != null) {
            return ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body(Map.of("response", "User already exists by the email."));
        }

        // If not we have to send the otp to the email till then have to save the user
        // in memory.
        persistanceStorage.put(signupDTO.getEmail(), signupDTO);

        // Now we have to send the otp will do that task later.
        String otp = generalUtility.generateOTP();
        // log.info("OTP is {}", otp);

        // Sending OTP.
        String mailBody = mailUtility.createOTPMessage(signupDTO.getName(), otp);
        if (!mailService.sendMail(signupDTO.getEmail(), "One Time Password", mailBody)) {
            return ResponseEntity
                    .badRequest()
                    .body("Failed to send the otp, try again later");
        }

        log.info("OTP has been successfully sent to the person's email: {}", signupDTO.getEmail());

        // Setting the otp.
        otpPersistenceStorage.put(signupDTO.getEmail(), otp);

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
        SignupDTO signupDTO = persistanceStorage.get(otpDTO.getEmail());

        User user = mapToUser(signupDTO);

        if (userRepository.save(user) == null) {
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

    private User mapToUser(SignupDTO signupDTO) {
        return User
                .builder()
                .id(generalUtility.generateIdForCustomer())
                .email(signupDTO.getEmail())
                .name(signupDTO.getName())
                .password(passwordEncoder.encode(signupDTO.getPassword()))
                .build();
    }

}
