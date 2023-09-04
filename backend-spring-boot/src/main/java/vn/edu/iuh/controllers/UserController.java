package vn.edu.iuh.controllers;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import vn.edu.iuh.models.User;
import vn.edu.iuh.servives.UserService;

import java.util.List;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

    @PostMapping
    public User createUser(@RequestBody User user) {
        return userService.save(user);
    }

    @GetMapping("/users")
    public List<User> getAllUsers() {
        return userService.findAll();
    }
}
