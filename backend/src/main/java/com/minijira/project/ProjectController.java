package com.minijira.project;

import java.time.Instant;
import java.util.List;

import jakarta.validation.Valid;

import com.minijira.issue.Issue;
import com.minijira.issue.IssueService;

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
@RequestMapping("/api/projects")
public class ProjectController {

  private final ProjectService projectService;
  private final IssueService issueService;

  public ProjectController(ProjectService projectService, IssueService issueService) {
    this.projectService = projectService;
    this.issueService = issueService;
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

  @DeleteMapping("/{id}")
  void deleteProject(@PathVariable Long id) {
    projectService.deleteProject(id);
  }

  @GetMapping("/{projectId}/issues")
  List<Issue> findIssuesByProjectId(@PathVariable Long projectId) {
    return issueService.findIssuesByProjectId(projectId);
  }
}
