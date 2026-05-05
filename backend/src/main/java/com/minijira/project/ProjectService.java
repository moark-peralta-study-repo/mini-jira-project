package com.minijira.project;

import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class ProjectService {

  private final ProjectRepository projectRepository;

  public ProjectService(ProjectRepository projectRepository) {
    this.projectRepository = projectRepository;
  }

  public List<Project> findAllProjects() {
    return projectRepository.findAll();
  }

  public Project findById(Long id) {
    return projectRepository.findById(id).orElseThrow(() -> new ProjectNotFoundException(id));
  }

  public void createProject(Project project) {
    projectRepository.save(project);
  }

  public void deleteProject(Long id) {
    if (!projectRepository.existsById(id)) {
      throw new ProjectNotFoundException(id);
    }
    projectRepository.deleteById(id);
  }
}
