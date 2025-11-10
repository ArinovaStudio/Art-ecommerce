package studio.arinova.artecommerce.service;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import studio.arinova.artecommerce.dto.ProductRequestDTO;

import java.util.List;

@Service
public class ProductService {

    public void addProduct(ProductRequestDTO productRequest, List<MultipartFile> files) {
        // Here we have to do the cloudinary task
        // saving the files to the cloudinary and update the db as per that.


    }
}
