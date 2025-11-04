package studio.arinova.artecommerce.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity(name = "seller_data")
public class Seller {

    @Id
    private String id;
    private String name;
    private String email;
    private String password;
    // Adding more fields.
}
