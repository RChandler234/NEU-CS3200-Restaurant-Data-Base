package com.example.springtemplate.repositories;

import com.example.springtemplate.models.IngredientAmount;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface IngredientAmountRepository
    extends CrudRepository<IngredientAmount, Integer> {
  @Query(value = "SELECT * FROM ingredient_amounts",
      nativeQuery = true)
  public List<IngredientAmount> findAllIngredientAmounts();

  @Query(value = "SELECT * FROM ingredient_amounts WHERE id=:ingredientAmountId",
      nativeQuery = true)
  public IngredientAmount findIngredientAmountById(@Param("ingredientAmountId") Integer id);

  @Query(value = "SELECT * FROM ingredient_amounts WHERE dish_id=:dishId",
      nativeQuery = true)
  public List<IngredientAmount> findIngredientAmountByDish(@Param("dishId") Integer id);

  @Query(value = "SELECT * FROM ingredient_amounts WHERE ingredient_id=:ingredientId",
      nativeQuery = true)
  public List<IngredientAmount> findIngredientAmountByIngredient(@Param("ingredientId") Integer id);
}
