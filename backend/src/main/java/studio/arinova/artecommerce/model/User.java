package studio.arinova.artecommerce.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import studio.arinova.artecommerce.enums.UserType;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity(name = "user_data")
public class User {
    @Id
    private String id;
    private String name;
    private String email;
    private String password;
    @Column(name = "user_type")
    private UserType userType;
}
