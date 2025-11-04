package studio.arinova.artecommerce.repository;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Root;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import studio.arinova.artecommerce.model.Customer;

import java.util.List;

@Repository
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class CustomerRepositoryImpl implements CustomerRepository {

    @PersistenceContext
    private final EntityManager entityManager;

    @Override
    public Customer findByEmail(String email) {
        // Creating SQL queries via CriteriaBuilder.
        CriteriaBuilder cb = entityManager.getCriteriaBuilder();
        // Creating type safe query so that it returns the customer entity.
        CriteriaQuery<Customer> query = cb.createQuery(Customer.class);
        // It defines the root entity the table from which we are querying.
        Root<Customer> customer = query.from(Customer.class);
        // This line is equivalent to SELECT * FROM Customer WHERE email = email;
        query.select(customer).where(cb.equal(customer.get("email"), email));
        List<Customer> result = entityManager.createQuery(query).getResultList();

        return result.isEmpty() ? null : result.get(0);
    }

    @Override
    @Transactional
    public Customer save(Customer customer) {
        entityManager.persist(customer);
        return customer;
    }
}
