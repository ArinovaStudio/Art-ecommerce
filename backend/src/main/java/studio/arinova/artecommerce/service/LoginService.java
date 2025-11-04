package studio.arinova.artecommerce.service;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import studio.arinova.artecommerce.dto.LoginDTO;
import studio.arinova.artecommerce.utility.GeneralUtility;

import java.util.Map;

@Service
@RequiredArgsConstructor
public class LoginService {

    private final AuthenticationManager authenticationManager;

    public ResponseEntity<?> loginHandler(LoginDTO loginDTO) {
        Authentication authentication = authenticationManager
                .authenticate(new UsernamePasswordAuthenticationToken(
                        GeneralUtility.concatEmailAndRole(loginDTO.getEmail(), loginDTO.getUserType())
                        , loginDTO.getPassword())
                );

        SecurityContextHolder.getContext().setAuthentication(authentication);

        return ResponseEntity.ok(Map.of(
                "response", "Login Successfully"
        ));
    }


}
