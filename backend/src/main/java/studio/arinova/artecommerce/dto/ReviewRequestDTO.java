package studio.arinova.artecommerce.dto;

import lombok.Data;

@Data
public class ReviewRequestDTO {
    private String userId;
    private String productId;
    private int rating;
    private String comment;
}
