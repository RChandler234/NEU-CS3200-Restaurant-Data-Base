package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Dish;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface DishRepository
    extends CrudRepository<Dish, Integer> {
  @Query(value = "SELECT * FROM dishes",
      nativeQuery = true)
  public List<Dish> findAllDishes();
  @Query(value = "SELECT * FROM dishes WHERE id=:dishId",
      nativeQuery = true)
  public Dish findDishById(@Param("dishId") Integer id);
}
