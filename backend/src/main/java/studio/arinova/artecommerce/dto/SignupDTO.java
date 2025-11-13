package studio.arinova.artecommerce.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import studio.arinova.artecommerce.enums.Role;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SignupDTO {
    private String name;
    private String email;
    private String password;
    private Role role;
}
