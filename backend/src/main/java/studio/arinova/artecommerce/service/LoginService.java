package studio.arinova.artecommerce.service;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import studio.arinova.artecommerce.dto.LoginDTO;
import studio.arinova.artecommerce.security.CustomUserDetails;
import studio.arinova.artecommerce.utility.GeneralUtility;
import studio.arinova.artecommerce.utility.JwtUtility;

import java.util.Map;

@Service
@RequiredArgsConstructor
public class LoginService {

    private final AuthenticationManager authenticationManager;
    private final JwtUtility jwtUtility;

    public ResponseEntity<?> loginHandler(LoginDTO loginDTO) {
        Authentication authentication = authenticationManager
                .authenticate(new UsernamePasswordAuthenticationToken(
                        loginDTO.getEmail()
                        , loginDTO.getPassword())
                );

        SecurityContextHolder.getContext().setAuthentication(authentication);

        CustomUserDetails userDetails = (CustomUserDetails) authentication.getPrincipal();

        // Since here we need to create the token n all.
        String token = jwtUtility.generateToken(userDetails.getId(), userDetails.getName(), userDetails.getEmail());

        return ResponseEntity.ok(Map.of(
                "response", "Logged in successfully.",
                "token", token
        ));
    }


}
