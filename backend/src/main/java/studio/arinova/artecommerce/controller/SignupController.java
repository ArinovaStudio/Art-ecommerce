package studio.arinova.artecommerce.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import studio.arinova.artecommerce.dto.CustomerSignupDTO;
import studio.arinova.artecommerce.dto.OtpDTO;
import studio.arinova.artecommerce.service.SignupService;

@RestController
@RequestMapping("/api/auth/signup")
@RequiredArgsConstructor
public class SignupController {

    private final SignupService signupService;

    @PostMapping("/customer")
    public ResponseEntity<?> handleCustomerSignup(@RequestBody CustomerSignupDTO customerSignupDTO) {
        return signupService.signupHandlerCustomer(customerSignupDTO);
    }

    @PostMapping("/customer/otp")
    public ResponseEntity<?> handleCustomerOTP(@RequestBody OtpDTO otpDTO) {
        return signupService.otpValidation(otpDTO);
    }

}
