package com.example.springtemplate.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
@Table(name="ingredient_amounts")
public class IngredientAmount {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer id;

  @ManyToOne
  @JoinColumn(name = "ingredient_id", referencedColumnName = "id")
  private Ingredient ingredient;
  @ManyToOne
  @JoinColumn(name = "dish_id", referencedColumnName = "id")
  private Dish dish;

  public IngredientAmount(Dish dish, Ingredient ingredient) {
    this.dish = dish;
    this.ingredient = ingredient;
  }

  public IngredientAmount() {
  }

  public Integer getId() {
    return id;
  }

  public void setId(Integer id) {
    this.id = id;
  }

  public Ingredient getIngredient() {
    return ingredient;
  }

  public void setIngredient(Ingredient ingredient) {
    this.ingredient = ingredient;
  }

  public Dish getDish() {
    return dish;
  }

  public void setDish(Dish dish) {
    this.dish = dish;
  }

}