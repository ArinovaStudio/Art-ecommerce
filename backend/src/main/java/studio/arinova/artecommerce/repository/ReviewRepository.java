package studio.arinova.artecommerce.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import studio.arinova.artecommerce.model.Review;

import java.util.List;

public interface ReviewRepository extends JpaRepository<Review, String> {

    List<Review> findByProduct_Id(String productId);

    List<Review> findByUser_Id(String userId);
}
