package studio.arinova.artecommerce.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import studio.arinova.artecommerce.dto.ProductRequestDTO;
import studio.arinova.artecommerce.enums.ProductCategory;
import studio.arinova.artecommerce.model.Product;
import studio.arinova.artecommerce.model.User;
import studio.arinova.artecommerce.repository.ProductRepository;
import studio.arinova.artecommerce.repository.UserRepository;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ProductService {

    private final ProductRepository productRepository;
    private final UserRepository userRepository;

    public Product addProduct(ProductRequestDTO productRequest, List<MultipartFile> files) {

        User artist = userRepository.findById(productRequest.getArtistId())
                .orElseThrow(() -> new RuntimeException("Artist not found with ID: " + productRequest.getArtistId()));

        Product product = Product.builder()
                .title(productRequest.getTitle())
                .description(productRequest.getDescription())
                .category(ProductCategory.valueOf(productRequest.getCategory()))
                .artist(artist)
                .price(productRequest.getPrice())
                .imageURLs(new ArrayList<>())
                .build();

        return productRepository.save(product);
    }
}
