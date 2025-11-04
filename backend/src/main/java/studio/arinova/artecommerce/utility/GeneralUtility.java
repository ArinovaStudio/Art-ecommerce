package studio.arinova.artecommerce.utility;

import org.springframework.stereotype.Component;
import studio.arinova.artecommerce.enums.UserType;

import java.security.SecureRandom;
import java.util.Map;

@Component
public class GeneralUtility {

    private final SecureRandom secureRandom = new SecureRandom();

    public static String concatEmailAndRole(String email, UserType role) {
        return String.format("%s:%s", email.trim(), String.valueOf(role).trim());
    }

    public static Map<String, String> splitEmailAndRole(String emailAndRole) {
        String[] arr = emailAndRole.split(":");
        return Map.of("email", arr[0],
                "role", arr[1]);
    }

    public String generateOTP() {
        return String.valueOf(secureRandom.nextInt(999999));
    }

    public String generateIdForCustomer() {
        return String.format("customer%d", secureRandom.nextInt(9999));
    }

}
