package com.example.springtemplate.daos;

import com.example.springtemplate.models.IngredientAmount;
import com.example.springtemplate.models.Ingredient;
import com.example.springtemplate.models.Dish;
import com.example.springtemplate.repositories.IngredientAmountRepository;
import com.example.springtemplate.repositories.DishRepository;
import com.example.springtemplate.repositories.IngredientRepository;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class IngredientAmountOrmDao {
  @Autowired
  IngredientAmountRepository ingredientAmountRepository;
  @Autowired
  DishRepository dishRepository;
  @Autowired
  IngredientRepository ingredientRepository;


  @PostMapping("/api/ingredientAmounts/{ingredientId}/{dishId}")
  public IngredientAmount createRecipe(@PathVariable("ingredientId") Integer ingredientId,
      @PathVariable("dishId") Integer dishId,
      @RequestBody IngredientAmount ingredientAmount) {
    ingredientAmount.setIngredient(ingredientRepository.findIngredientById(ingredientId));
    ingredientAmount.setDish(dishRepository.findDishById(dishId));
    return ingredientAmountRepository.save(ingredientAmount);
  }

  @GetMapping("/api/ingredientAmounts")
  public List<IngredientAmount> findAllIngredientAmounts() {
    return ingredientAmountRepository.findAllIngredientAmounts();
  }

  @GetMapping("/api/ingredientAmounts/{ingredientAmountId}")
  public IngredientAmount findIngredientAmountById(
      @PathVariable("ingredientAmountId") Integer id) {
    return ingredientAmountRepository.findIngredientAmountById(id);
  }

  @PutMapping("/api/ingredientAmount/{IngredientAmountId}")
  public IngredientAmount updateIngredientAmount(
      @PathVariable("ingredientAmountId") Integer id,
      @RequestBody IngredientAmount ingredientAmountUpdates) {
    IngredientAmount ingredientAmount = ingredientAmountRepository.findIngredientAmountById(id);
    ingredientAmount.setIngredient(ingredientAmount.getIngredient());
    ingredientAmount.setDish(ingredientAmount.getDish());

    return ingredientAmountRepository.save(ingredientAmount);
  }

  @DeleteMapping("/api/ingredientAmount/{ingredientAmountId}")
  public void deleteIngredientAmount(
      @PathVariable("ingredientAmountId") Integer id) {
    ingredientAmountRepository.deleteById(id);
  }
}

//