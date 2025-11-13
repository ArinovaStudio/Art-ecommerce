package studio.arinova.artecommerce.repository;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Root;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import studio.arinova.artecommerce.model.User;

import java.util.List;

@Repository
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class UserRepositoryImpl implements UserRepository {

    @PersistenceContext
    private final EntityManager entityManager;

    @Override
    public User findByEmail(String email) {
        // Creating SQL queries via CriteriaBuilder.
        CriteriaBuilder cb = entityManager.getCriteriaBuilder();
        // Creating type safe query so that it returns the customer entity.
        CriteriaQuery<User> query = cb.createQuery(User.class);
        // It defines the root entity the table from which we are querying.
        Root<User> user = query.from(User.class);
        // This line is equivalent to SELECT * FROM User WHERE email = email;
        query.select(user).where(cb.equal(user.get("email"), email));
        List<User> result = entityManager.createQuery(query).getResultList();

        return result.isEmpty() ? null : result.get(0);
    }

    @Override
    @Transactional
    public User save(User user) {
        entityManager.persist(user);
        return user;
    }
}
