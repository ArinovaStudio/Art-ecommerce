package studio.arinova.artecommerce.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import studio.arinova.artecommerce.dto.ProductRequestDTO;
import studio.arinova.artecommerce.service.ProductService;

import java.util.List;

@RestController
@RequestMapping("/api/product")
@RequiredArgsConstructor
public class ProductController {

    private final ProductService productService;

    @PostMapping(value = "/add", consumes = {"multipart/form-data"})
    public ResponseEntity<?> addProduct(
            @RequestPart("product") ProductRequestDTO productRequest,
            @RequestPart("files") List<MultipartFile> files
            ) {

        return productService.addProduct(productRequest, files);
    }

}
