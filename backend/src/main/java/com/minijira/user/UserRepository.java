package com.minijira.user;

import org.springframework.data.repository.ListCrudRepository;

public interface UserRepository extends ListCrudRepository<AppUser, Long> {

}
