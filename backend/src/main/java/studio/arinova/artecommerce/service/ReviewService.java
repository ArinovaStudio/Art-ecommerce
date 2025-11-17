package studio.arinova.artecommerce.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import studio.arinova.artecommerce.dto.ReviewRequestDTO;
import studio.arinova.artecommerce.model.Product;
import studio.arinova.artecommerce.model.Review;
import studio.arinova.artecommerce.model.User;
import studio.arinova.artecommerce.repository.ProductRepository;
import studio.arinova.artecommerce.repository.ReviewRepository;
import studio.arinova.artecommerce.repository.UserRepository;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ReviewService {

    private final ReviewRepository reviewRepository;
    private final UserRepository userRepository;
    private final ProductRepository productRepository;

    public void addReview(ReviewRequestDTO dto) {
        User user = userRepository.findById(dto.getUserId())
                .orElseThrow(() -> new RuntimeException("User not found"));

        Product product = productRepository.findById(dto.getProductId())
                .orElseThrow(() -> new RuntimeException("Product not found"));

        Review review = Review.builder()
                .user(user)
                .product(product)
                .rating(dto.getRating())
                .comment(dto.getComment())
                .build();

        reviewRepository.save(review);
    }

    public List<Review> getReviewsByProduct(String productId) {
        return reviewRepository.findByProduct_Id(productId);
    }

    public List<Review> getReviewsByUser(String userId) {
        return reviewRepository.findByUser_Id(userId);
    }
}
