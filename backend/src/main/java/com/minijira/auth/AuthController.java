package com.minijira.auth;

import java.util.Map;

import jakarta.servlet.http.HttpSession;

import com.minijira.auth.dto.AuthResponse;
import com.minijira.auth.dto.LoginRequest;
import com.minijira.auth.dto.RegisterRequest;
import com.minijira.user.AppUser;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

  private final AuthService authService;

  public AuthController(AuthService authService) {
    this.authService = authService;
  }

  @PostMapping("/register")
  @ResponseStatus(HttpStatus.CREATED)
  public AuthResponse register(@RequestBody RegisterRequest request) {
    return authService.register(request);
  }

  @PostMapping("/login")
  public AuthResponse login(@RequestBody LoginRequest request, HttpSession session) {
    AppUser user = authService.login(request);

    session.setAttribute("userId", user.getId());
    session.setAttribute("userEmail", user.getEmail());

    return new AuthResponse(
        user.getId(),
        user.getName(),
        user.getEmail());
  }

  @GetMapping("/me")
  public ResponseEntity<?> me(HttpSession session) {
    Long userId = (Long) session.getAttribute("userId");
    String userEmail = (String) session.getAttribute("userEmail");

    if (userId == null) {
      return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
    }

    return ResponseEntity.ok(Map.of(
        "id", userId,
        "email", userEmail));
  }
}
