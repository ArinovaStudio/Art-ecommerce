package studio.arinova.artecommerce.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import studio.arinova.artecommerce.dto.CartRequestDTO;
import studio.arinova.artecommerce.model.Cart;
import studio.arinova.artecommerce.service.CartService;

import java.util.Map;

@RestController
@RequestMapping("/api/cart")
@RequiredArgsConstructor
public class CartController {

    private final CartService cartService;

    @PostMapping("/add")
    public ResponseEntity<?> addToCart(@RequestBody CartRequestDTO request) {
        cartService.addItem(request);
        return ResponseEntity.ok(Map.of("response", "Item added to cart"));
    }

    @GetMapping("/{userId}")
    public ResponseEntity<Cart> getCart(@PathVariable String userId) {
        return ResponseEntity.ok(cartService.getCart(userId));
    }

    @DeleteMapping("/remove")
    public ResponseEntity<?> removeItem(@RequestBody CartRequestDTO request) {
        cartService.removeItem(request.getUserId(), request.getProductId());
        return ResponseEntity.ok(Map.of("message", "Item removed"));
    }

    @PutMapping("/update")
    public ResponseEntity<?> updateItem(@RequestBody CartRequestDTO request) {
        cartService.updateItem(request.getUserId(), request.getProductId(), request.getQuantity());
        return ResponseEntity.ok(Map.of("message", "Cart item updated"));
    }
}