package studio.arinova.artecommerce.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import studio.arinova.artecommerce.enums.OrderStatus;
import studio.arinova.artecommerce.model.Order;

import java.util.List;
import java.util.Optional;

public interface OrderRepository extends JpaRepository<Order, Long> {
    List<Order> findByUserId(Long userId);

    List<Order> findByStatus(OrderStatus status);

    Optional<Order> findById(Long id);
}
