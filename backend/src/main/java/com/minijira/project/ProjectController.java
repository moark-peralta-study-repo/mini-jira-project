package com.minijira.project;

import java.time.Instant;
import java.util.List;

import jakarta.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/projects")
public class ProjectController {

  private final ProjectService projectService;

  public ProjectController(ProjectService projectService) {
    this.projectService = projectService;
  }

  @GetMapping
  List<Project> findAllProjects() {
    return projectService.findAllProjects();
  }

  @PostMapping
  @ResponseStatus(HttpStatus.CREATED)
  void createProject(@RequestBody @Valid Project project) {
    project.setCreatedAt(Instant.now());
    projectService.createProject(project);
  }

  @GetMapping("/{id}")
  Project findById(@PathVariable Long id) {
    return projectService.findById(id);
  }

  void deleteProject(@PathVariable Long id) {
    projectService.deleteProject(id);
  }
}
