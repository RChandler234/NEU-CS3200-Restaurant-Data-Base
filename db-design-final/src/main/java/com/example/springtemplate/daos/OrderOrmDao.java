package com.example.springtemplate.daos;

import com.example.springtemplate.models.Order;
import com.example.springtemplate.repositories.DishRepository;
import com.example.springtemplate.repositories.OrderRepository;
import com.example.springtemplate.repositories.UserRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.*;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
public class OrderOrmDao {
  @Autowired
  OrderRepository orderItemRepository;
  @Autowired
  DishRepository dishRepository;
  @Autowired
  UserRepository userRepository;


  @PostMapping("/api/order/{userId}/{dishId}")
  public Order createOrder(
      @PathVariable("userId") Integer userId,
      @PathVariable("dishId") Integer dishId,
      @RequestBody Order order) {

    order.setUser(userRepository.findUserById(userId));
    order.setDish(dishRepository.findDishById(dishId));
    ;return orderItemRepository.save(order);
  }

  @GetMapping("/api/order")
  public List<Order> findAllOrders() {
    return orderItemRepository.findAllOrders();
  }

  @GetMapping("/api/order/{orderId}")
  public Order findOrderById(
      @PathVariable("orderId") Integer id) {
    return orderItemRepository.findOrderById(id);
  }

  @PutMapping("/api/order/{orderId}")
  public Order updateOrder(
      @PathVariable("orderId") Integer id,
      @RequestBody Order orderUpdates) {
    Order order = orderItemRepository.findOrderById(id);
    order.setUser(order.getUser());
    order.setDish(order.getDish());

    return orderItemRepository.save(order);
  }

  @DeleteMapping("/api/order/{orderId}")
  public void deleteOrder(
      @PathVariable("orderId") Integer id) {
    orderItemRepository.deleteById(id);
  }
}


