package com.example.springtemplate.models;

import java.util.Date;
import javax.persistence.*;

@Entity
@Table(name="orders")
public class Order {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer id;
  private Date orderDate;

  @ManyToOne
  @JoinColumn(name = "user_id", referencedColumnName = "id")
  private User user;

  @ManyToOne
  @JoinColumn(name = "dish_id", referencedColumnName = "id")
  private Dish dish;

  public Order(Date orderDate, Dish dish, User user) {
    this.orderDate = orderDate;
    this.dish = dish;
    this.user = user;
  }

  public Order() {

  }

  public Integer getId() {
    return id;
  }

  public void setId(Integer id) {
    this.id = id;
  }

  public Date getOrderDate() {
    return orderDate;
  }

  public void setOrderDate(Date orderDate) {
    this.orderDate = orderDate;
  }

  public Dish getDish() {
    return dish;
  }

  public void setDish(Dish dish) {
    this.dish = dish;
  }

  public User getUser() {
    return user;
  }

  public void setUser(User user) {
    this.user = user;
  }

  public Integer getUserId() {
    return this.user.getId();
  }

  public Integer getDishId() {
    return this.dish.getId();
  }

}

