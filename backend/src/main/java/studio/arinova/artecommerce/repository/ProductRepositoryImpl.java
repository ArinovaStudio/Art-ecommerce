package studio.arinova.artecommerce.repository;

import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import studio.arinova.artecommerce.model.Product;

@Repository
@Transactional
@RequiredArgsConstructor
public class ProductRepositoryImpl implements ProductRepository{

    private final EntityManager entityManager;

    @Override
    public Product save(Product product) {
        return null;
    }
}
