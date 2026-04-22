package com.minijira.auth;

import java.time.Instant;

import com.minijira.auth.dto.AuthResponse;
import com.minijira.auth.dto.LoginRequest;
import com.minijira.auth.dto.RegisterRequest;
import com.minijira.user.AppUser;
import com.minijira.user.UserRepository;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {
  private final UserRepository userRepository;
  private final PasswordEncoder passwordEncoder;

  public AuthService(UserRepository userRepository, PasswordEncoder passwordEncoder) {
    this.userRepository = userRepository;
    this.passwordEncoder = passwordEncoder;
  }

  public AppUser login(LoginRequest request) {
    AppUser user = userRepository.findByEmail(request.email()).orElseThrow(InvalidCredentialsException::new);

    boolean valid = passwordEncoder.matches(request.password(), user.getPasswordHash());

    if (!valid) {
      throw new InvalidCredentialsException();
    }

    return user;
  }

  public AuthResponse register(RegisterRequest request) {
    System.out.println("Register called");
    System.out.println("Email: " + request.email());

    if (userRepository.existsByEmail(request.email())) {
      System.out.println("Email already exists");
      throw new EmailAlreadyInUseException();
    }

    System.out.println("Creating user");

    AppUser user = new AppUser();
    user.setName(request.name());
    user.setEmail(request.email());
    user.setPasswordHash(passwordEncoder.encode(request.password()));
    user.setCreatedAt(Instant.now());

    AppUser savedUser = userRepository.save(user);

    System.out.println("User saved with id: " + savedUser.getId());

    return new AuthResponse(
        savedUser.getId(),
        savedUser.getName(),
        savedUser.getEmail());
  }
}
