package studio.arinova.artecommerce.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import studio.arinova.artecommerce.dto.ProductRequestDTO;
import studio.arinova.artecommerce.enums.ProductCategory;
import studio.arinova.artecommerce.model.Product;
import studio.arinova.artecommerce.model.User;
import studio.arinova.artecommerce.repository.ProductRepository;
import studio.arinova.artecommerce.repository.UserRepository;

import java.io.IOException;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
@Slf4j
public class ProductService {

    private final ProductRepository productRepository;
    private final UserRepository userRepository;
    private final CloudinaryService cloudinaryService;

    public ResponseEntity<?> addProduct(ProductRequestDTO productRequest, List<MultipartFile> files) {

        User artist = userRepository.findById(productRequest.getArtistId())
                .orElseThrow(() -> new RuntimeException("Artist not found with ID: " + productRequest.getArtistId()));


        // Here we have to upload the files.
        List<String> urls;
        try {
            urls = cloudinaryService.uploadFile(files);
        } catch (IOException e) {
            log.error("Unable to upload the files to cloudinary, ERROR: {}", e.getMessage());
            return ResponseEntity
                    .status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of("response", "Unable to add product try again later."));
        }

        Product product = Product.builder()
                .title(productRequest.getTitle())
                .description(productRequest.getDescription())
                .category(ProductCategory.valueOf(productRequest.getCategory()))
                .artist(artist)
                .price(productRequest.getPrice())
                .imageURLs(urls)
                .build();

        productRepository.save(product);

        return ResponseEntity
                .ok(Map.of("response", "Product added successfully"));
    }
}
