package studio.arinova.artecommerce.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import studio.arinova.artecommerce.model.Product;

public interface ProductRepository extends JpaRepository<Product, String> {
}
