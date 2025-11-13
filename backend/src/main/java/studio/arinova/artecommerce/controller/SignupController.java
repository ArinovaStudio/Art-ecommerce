package studio.arinova.artecommerce.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import studio.arinova.artecommerce.dto.SignupDTO;
import studio.arinova.artecommerce.dto.OtpDTO;
import studio.arinova.artecommerce.service.SignupService;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class SignupController {

    private final SignupService signupService;

    @PostMapping("/signup")
    public ResponseEntity<?> handleCustomerSignup(@RequestBody SignupDTO signupDTO) {
        return signupService.signupHandlerCustomer(signupDTO);
    }

    @PostMapping("/signup/otp")
    public ResponseEntity<?> handleCustomerOTP(@RequestBody OtpDTO otpDTO) {
        return signupService.otpValidation(otpDTO);
    }

}
