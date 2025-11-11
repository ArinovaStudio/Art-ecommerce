package studio.arinova.artecommerce.repository;

import studio.arinova.artecommerce.model.Product;

import java.util.Optional;

public interface ProductRepository {

    // For saving the product.
    void save(Product product);

    Optional<Product> findById(Long productId);
}
