package studio.arinova.artecommerce.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import studio.arinova.artecommerce.enums.OrderStatus;
import studio.arinova.artecommerce.model.Cart;
import studio.arinova.artecommerce.model.CartItem;
import studio.arinova.artecommerce.model.Order;
import studio.arinova.artecommerce.model.OrderItem;
import studio.arinova.artecommerce.repository.CartRepository;
import studio.arinova.artecommerce.repository.OrderRepository;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class OrderService {

    private final OrderRepository orderRepository;
    private final CartRepository cartRepository;

    public Order placeOrder(Long userId) {
        Cart cart = cartRepository.findByUserId(userId)
                .orElseThrow(() -> new RuntimeException("Cart not found for user ID:" + userId));

        if (cart.getItems().isEmpty()) {
            throw new RuntimeException("Cart is empty, cannot place order");
        }

        Order order = Order
                .builder()
                .userId(userId)
                .status(OrderStatus.PLACED)
                .build();

        List<CartItem> cartItems = cart.getItems();

        double totalAmount = 0.0;
        List<OrderItem> orderItems = new ArrayList<>();

        for (CartItem cartItem: cartItems) {

            OrderItem orderItem = OrderItem
                    .builder()
                    .order(order)
                    .productId(cartItem.getProduct().getId())
                    .productName(cartItem.getProduct().getTitle())
                    .quantity(cartItem.getQuantity())
                    .price(cartItem.getProduct().getPrice().doubleValue())
                    .build();

            orderItems.add(orderItem);

            totalAmount += cartItem.getProduct().getPrice().doubleValue() * cartItem.getQuantity();
        }

        order.setTotalAmount(totalAmount);
        order.setItems(orderItems);

        Order savedOrder = orderRepository.save(order);

        cart.getItems().clear();
        cartRepository.save(cart); // Cart has been cleared.

        return savedOrder;
    }

    public List<Order> getOrdersByUser(Long userId) {
        return orderRepository.findByUserId(userId);
    }

    public List<Order> getOrderByStatus(OrderStatus status) {
        return orderRepository.findByStatus(status);
    }

    public void cancelOrder(Long orderId) {
        Order order = orderRepository.findById(orderId)
                .orElseThrow(() -> new RuntimeException("No order found of the ID"));

        if (order.getStatus() == OrderStatus.DELIVERED) {
            throw new RuntimeException("Cannot cancel a delivered order.");
        }

        order.setStatus(OrderStatus.CANCELLED);
        orderRepository.save(order);
    }

}
