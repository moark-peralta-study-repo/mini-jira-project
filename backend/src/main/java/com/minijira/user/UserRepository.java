package com.minijira.user;

import java.util.Optional;

import org.springframework.data.repository.ListCrudRepository;

public interface UserRepository extends ListCrudRepository<AppUser, Long> {
  Optional<AppUser> findByEmail(String email);

  boolean existsByEmail(String email);
}
