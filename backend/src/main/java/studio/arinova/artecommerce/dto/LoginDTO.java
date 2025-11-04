package studio.arinova.artecommerce.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import studio.arinova.artecommerce.enums.UserType;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class LoginDTO {
    private UserType userType;
    private String email;
    private String password;
}
