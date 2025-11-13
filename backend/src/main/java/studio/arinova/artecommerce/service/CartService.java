package studio.arinova.artecommerce.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import studio.arinova.artecommerce.dto.CartRequestDTO;
import studio.arinova.artecommerce.model.Cart;
import studio.arinova.artecommerce.model.Product;
import studio.arinova.artecommerce.model.User;
import studio.arinova.artecommerce.repository.CartRepository;
import studio.arinova.artecommerce.repository.ProductRepository;

@Service
@RequiredArgsConstructor
public class CartService {

    private final CartRepository cartRepository;
    private final ProductRepository productRepository;

    public void addItem(CartRequestDTO cartRequest) {
        Cart cart = cartRepository.findByUserId(cartRequest.getUserId())
                .orElseGet(() -> {
                    Cart newCart = new Cart();
                    User user = new User();
                    user.setId(cartRequest.getUserId());
                    newCart.setUser(user);
                    return newCart;
                });

        Product product = productRepository.findById(cartRequest.getProductId())
                .orElseThrow(() -> new RuntimeException("Product not found"));

        cart.addProduct(product, cartRequest.getQuantity());
        cartRepository.save(cart);
    }

    public Cart getCart(Long userId) {
        return cartRepository.findByUserId(userId)
                .orElseGet(() -> new Cart());
    }

    public void removeItem(Long userId, Long productId) {
        Cart cart = cartRepository.findByUserId(userId)
                .orElseThrow(() -> new RuntimeException("Cart not found"));
        cart.removeProduct(productId);
        cartRepository.save(cart);
    }

    public void updateItem(Long userId, Long productId, int quantity) {
        Cart cart = cartRepository.findByUserId(userId)
                .orElseThrow(() -> new RuntimeException("Cart not found"));

        cart.getItems().forEach(item -> {
            if (item.getProduct().getId().equals(productId)) {
                item.setQuantity(quantity);
            }
        });

        cartRepository.save(cart);
    }

}
