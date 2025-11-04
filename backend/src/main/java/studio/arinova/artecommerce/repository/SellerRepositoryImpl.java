package studio.arinova.artecommerce.repository;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Root;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;
import studio.arinova.artecommerce.model.Seller;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class SellerRepositoryImpl implements SellerRepository{

    @PersistenceContext
    public final EntityManager entityManager;

    @Override
    public Seller findByEmail(String email) {
        CriteriaBuilder cb = entityManager.getCriteriaBuilder();
        CriteriaQuery<Seller> query = cb.createQuery(Seller.class);
        Root<Seller> sellerTable = query.from(Seller.class);
        // Creating query.
        query.select(sellerTable).where(cb.equal(sellerTable.get("email"), email));
        List<Seller> result = entityManager.createQuery(query).getResultList();
        return result.isEmpty() ? null : result.get(0);
    }
}
