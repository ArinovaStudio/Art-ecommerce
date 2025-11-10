package studio.arinova.artecommerce.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import studio.arinova.artecommerce.enums.Role;

import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity(name = "user_data")
public class User {
    @Id
    private Long id;
    private String name;
    private String email;
    private String password;
    @Column(name = "user_type")
    private Role role;
    private String artStyle; // Main style.

    // One user can have many products.
    @OneToMany(mappedBy = "artist", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Product> artWorks;
}
