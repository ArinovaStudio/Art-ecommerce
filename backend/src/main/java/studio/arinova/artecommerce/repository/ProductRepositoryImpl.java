package studio.arinova.artecommerce.repository;

import jakarta.persistence.EntityManager;
import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Root;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import studio.arinova.artecommerce.model.Product;
import studio.arinova.artecommerce.model.User;

import java.util.List;
import java.util.Optional;

@Repository
@Transactional
@RequiredArgsConstructor
public class ProductRepositoryImpl implements ProductRepository{

    private final EntityManager entityManager;

    @Override
    public void save(Product product) {}

    @Override
    public Optional<Product> findById(Long productId) {
        CriteriaBuilder cb = entityManager.getCriteriaBuilder();
        CriteriaQuery<Product> query = cb.createQuery(Product.class);
        Root<Product> productRoot = query.from(Product.class);
        query.select(productRoot).where(cb.equal(productRoot.get("id"), productId));
        List<Product> result = entityManager.createQuery(query).getResultList();

        return result.isEmpty() ? null : Optional.ofNullable(result.get(0));
    }
}
