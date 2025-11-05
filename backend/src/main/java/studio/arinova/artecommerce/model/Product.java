package studio.arinova.artecommerce.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import studio.arinova.artecommerce.enums.ProductCategory;

import java.math.BigDecimal;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "product_data")
public class Product {

    @Id
    private Long id;

    private String title;
    private String description;
    private ProductCategory category;
    @OneToOne
    @JoinColumn(name = "artist_id", referencedColumnName = "id")
    private User artist;

    private BigDecimal price;
    private List<String> imageURLs;

}
