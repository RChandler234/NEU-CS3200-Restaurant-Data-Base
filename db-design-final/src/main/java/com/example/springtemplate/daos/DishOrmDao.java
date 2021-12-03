package com.example.springtemplate.daos;

import com.example.springtemplate.models.Dish;
import com.example.springtemplate.models.IngredientAmount;
import com.example.springtemplate.models.Order;
import com.example.springtemplate.repositories.DishRepository;
import com.example.springtemplate.repositories.IngredientAmountRepository;
import com.example.springtemplate.repositories.OrderRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
public class DishOrmDao {
    @Autowired
    DishRepository dishRepository;
    @Autowired
    OrderRepository orderRepository;
    @Autowired
    IngredientAmountRepository ingredientAmountRepository;

    @PostMapping("/api/dishes")
    public Dish createDish(@RequestBody Dish dish) {
        return dishRepository.save(dish);
    }

    @GetMapping("/api/dishes")
    public List<Dish> findAllDishes() {
        return dishRepository.findAllDishes();
    }

    @GetMapping("/api/dishes/{dishId}")
    public Dish findDishById(
        @PathVariable("dishId") Integer id) {
        return dishRepository.findDishById(id);
    }


    @PutMapping("/api/dishes/{dishId}")
    public Dish updateDish(
        @PathVariable("dishId") Integer id,
        @RequestBody Dish dishUpdates) {
        Dish dish = dishRepository.findDishById(id);
        dish.setName(dishUpdates.getName());
        dish.setType(dishUpdates.getType());
        dish.setCalories(dishUpdates.getCalories());
        dish.setPrice(dishUpdates.getPrice());

        return dishRepository.save(dish);
    }

    @DeleteMapping("/api/dishes/{dishId}")
    public void deleteDish(
        @PathVariable("dishId") Integer id) {
        dishRepository.deleteById(id);
    }

    @GetMapping("/api/dishes/orders/dishes/{dishId}")
    public List<Order> findOrderByDishes(
        @PathVariable("dishId") Integer id){
        return orderRepository.findOrdersByDish(id);
    }

    @GetMapping("/api/dishes/recipes/dish/{dishId}")
    public List<IngredientAmount> findIngredientAmountByDishes(
        @PathVariable("dishId") Integer id){
        return ingredientAmountRepository.findIngredientAmountByDish(id);
    }
}
