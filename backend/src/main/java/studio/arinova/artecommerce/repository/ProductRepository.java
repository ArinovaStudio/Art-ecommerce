package studio.arinova.artecommerce.repository;

import studio.arinova.artecommerce.model.Product;

public interface ProductRepository {

    // For saving the product.
    public Product save(Product product);
}
