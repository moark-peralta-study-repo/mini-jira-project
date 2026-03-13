package com.minijira.user;

import java.util.List;

import jakarta.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/users")
public class UserController {
  private final UserService userService;

  public UserController(UserService userService) {
    this.userService = userService;
  }

  @GetMapping
  List<AppUser> findAllUsers() {
    return userService.findAllUsers();
  }

  @PostMapping
  @ResponseStatus(HttpStatus.CREATED)
  void createUser(@RequestBody @Valid AppUser user) {
    userService.createUser(user);
  }

  @GetMapping("/{id}")
  AppUser findById(@PathVariable Long id) {
    return userService.findById(id);
  }

  @DeleteMapping("/{id}")
  @ResponseStatus(HttpStatus.NO_CONTENT)
  void deleteUser(@PathVariable Long id) {
    userService.deleteUser(id);
  }
}
