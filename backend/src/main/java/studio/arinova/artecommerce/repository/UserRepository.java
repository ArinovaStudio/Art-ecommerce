package studio.arinova.artecommerce.repository;

import studio.arinova.artecommerce.model.User;

public interface UserRepository {

    public User findByEmail(String email);

    public User save(User customer);

}
