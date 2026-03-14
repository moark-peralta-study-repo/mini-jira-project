package com.minijira.project;

import org.springframework.data.repository.ListCrudRepository;

public interface ProjectRepository extends ListCrudRepository<Project, Long> {
}
