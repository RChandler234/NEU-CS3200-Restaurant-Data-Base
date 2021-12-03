package com.example.springtemplate.daos;

import com.example.springtemplate.models.IngredientAmount;
import com.example.springtemplate.models.Order;
import com.example.springtemplate.models.User;
import com.example.springtemplate.repositories.OrderRepository;
import com.example.springtemplate.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
public class UserOrmDao {
    @Autowired
    UserRepository userRepository;
    @Autowired
    OrderRepository orderRepository;

    @PostMapping("/api/users")
    public User createUser(@RequestBody User user) {
        return userRepository.save(user);
    }

    @GetMapping("/api/users")
    public List<User> findAllUsers() {
        return userRepository.findAllUsers();
    }

    @GetMapping("/api/users/{userId}")
    public User findUserById(
        @PathVariable("userId") Integer id) {
        return userRepository.findUserById(id);
    }

    @DeleteMapping("/api/users/{userId}")
    public void deleteUser(
        @PathVariable("userId") Integer id) {
        userRepository.deleteById(id);
    }

    @PutMapping("/api/users/{userId}")
    public User updateUser(
        @PathVariable("userId") Integer id,
        @RequestBody User userUpdates) {
        User user = userRepository.findUserById(id);
        user.setFirstName(userUpdates.getFirstName());
        user.setLastName(userUpdates.getLastName());
        user.setUsername(userUpdates.getUsername());
        user.setPassword(userUpdates.getPassword());
        user.setEmail(userUpdates.getEmail());
        user.setDateOfBirth(userUpdates.getDateOfBirth());
        return userRepository.save(user);
    }

    @GetMapping("/api/users/orders/users/{userId}")
    public List<Order> findOrdersByUsers(
        @PathVariable("userID") Integer id){
        return orderRepository.findOrdersByUser(id);
    }

}
