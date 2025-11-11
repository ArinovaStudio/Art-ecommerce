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
@Entity(name = "users")
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

    // Here we are creating a cart with a one to one relationship.
    // Means - One user can have only one cart.
    @OneToOne(mappedBy = "user", cascade = CascadeType.ALL)
    private Cart cart;
}
