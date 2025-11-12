package studio.arinova.artecommerce.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import studio.arinova.artecommerce.dto.LoginDTO;
import studio.arinova.artecommerce.service.LoginService;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/auth")
public class LoginController {

    private final LoginService loginService;

    @PostMapping("/login")
    public ResponseEntity<?> handleLogin(@RequestBody LoginDTO loginDTO) {
        return loginService.loginHandler(loginDTO);
    }

}
