package com.minijira.project;

public class ProjectNotFoundException extends RuntimeException {
  public ProjectNotFoundException(Long id) {
    super("Project with " + id + " not found.");
  }
}
