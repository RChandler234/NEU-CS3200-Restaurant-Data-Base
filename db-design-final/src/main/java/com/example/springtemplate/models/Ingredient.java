package com.example.springtemplate.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="ingredients")
public class Ingredient {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer id;
  private String name;
  private Integer prepTime;

  @OneToMany(mappedBy = "ingredient")
  @JsonIgnore
  private List<IngredientAmount> ingredientAmounts;


  public Ingredient(String name, Integer prepTime, List<IngredientAmount> ingredientAmounts) {
    this.name = name;
    this.prepTime = prepTime;
    this.ingredientAmounts = ingredientAmounts;
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

  public Integer getPrepTime() {
    return prepTime;
  }

  public void setPrepTime(int prepTime) {
    this.prepTime = prepTime;
  }

  public List<IngredientAmount> getIngredientAmounts() {
    return ingredientAmounts;
  }

  public void setIngredientAmounts(List<IngredientAmount> ingredientAmounts) {
    this.ingredientAmounts = ingredientAmounts;
  }

  public Ingredient() {}
}