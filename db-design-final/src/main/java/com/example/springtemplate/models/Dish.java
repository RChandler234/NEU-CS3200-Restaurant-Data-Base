package com.example.springtemplate.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.sql.Date;
import java.util.List;
import org.aspectj.weaver.ast.Or;

@Entity
@Table(name="dishes")
public class Dish {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer id;
  private String name;
  @Enumerated(EnumType.STRING)
  private DishType type;
  private Integer calories;
  private float price;

  @OneToMany(mappedBy = "dish")
  @JsonIgnore
  private List<IngredientAmount> ingredientAmounts;

  @OneToMany(mappedBy = "dish")
  @JsonIgnore
  private List<Order> orders;

  public Dish(String name, DishType type, Integer calories, float price,
      List<IngredientAmount> ingredientAmounts, List<Order> orders) {
    this.name = name;
    this.type = type;
    this.calories = calories;
    this.price = price;
    this.ingredientAmounts = ingredientAmounts;
    this.orders = orders;
  }

  public Integer getId() {
    return id;
  }

  public void setId(Integer id) {
    this.id = id;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public DishType getType() {
    return type;
  }

  public void setType(DishType type) {
    this.type = type;
  }

  public Integer getCalories() {
    return calories;
  }

  public void setCalories(Integer calories) {
    this.calories = calories;
  }

  public float getPrice() {
    return price;
  }

  public void setPrice(float price) {
    this.price = price;
  }

  public List<IngredientAmount> getIngredientAmounts() {
    return ingredientAmounts;
  }

  public void setIngredientAmounts(List<IngredientAmount> ingredientAmounts) {
    this.ingredientAmounts = ingredientAmounts;
  }

  public List<Order> getOrders() {
    return orders;
  }

  public void setOrders(List<Order> orders) {
    this.orders = orders;
  }

  public Dish() {}
}