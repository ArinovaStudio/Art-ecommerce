package studio.arinova.artecommerce.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import studio.arinova.artecommerce.model.User;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, String> {

    Optional<User> findByEmail(String email);
}
