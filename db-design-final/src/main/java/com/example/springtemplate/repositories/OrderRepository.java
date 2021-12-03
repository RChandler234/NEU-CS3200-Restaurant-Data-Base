package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Order;
import java.util.List;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface OrderRepository
    extends CrudRepository<Order, Integer> {
  @Query(value = "SELECT * FROM orders",
      nativeQuery = true)
  public List<Order> findAllOrders();

  @Query(value = "SELECT * FROM orders WHERE id=:orderId",
      nativeQuery = true)
  public Order findOrderById(@Param("orderId") Integer id);

  @Query(value = "SELECT * FROM orders WHERE user_id=:userId",
      nativeQuery = true)
  public List<Order> findOrdersByUser(@Param("userId") Integer id);

  @Query(value = "SELECT * FROM orders WHERE dish_id=:dishId",
      nativeQuery = true)
  public List<Order> findOrdersByDish(@Param("dishId") Integer id);
}
