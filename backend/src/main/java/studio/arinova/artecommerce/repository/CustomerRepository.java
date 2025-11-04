package studio.arinova.artecommerce.repository;

import studio.arinova.artecommerce.model.Customer;

import java.util.List;

public interface CustomerRepository {

    public Customer findByEmail(String email);

    public Customer save(Customer customer);

}
