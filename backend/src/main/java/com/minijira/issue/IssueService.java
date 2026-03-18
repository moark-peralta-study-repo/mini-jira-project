package com.minijira.issue;

import java.util.ArrayList;
import java.util.List;

import com.minijira.project.ProjectService;
import com.minijira.project.dto.ProjectBoardResponse;
import com.minijira.user.UserService;

import org.springframework.stereotype.Service;

@Service
public class IssueService {

  private final IssueRepository issueRepository;
  private final UserService userService;
  private final ProjectService projectService;

  public IssueService(IssueRepository issueRepository, UserService userService, ProjectService projectService) {
    this.issueRepository = issueRepository;
    this.userService = userService;
    this.projectService = projectService;
  }

  public List<Issue> findAllIssues() {
    return issueRepository.findAll();
  }

  public Issue findById(Long id) {
    return issueRepository.findById(id)
        .orElseThrow(() -> new IssueNotFoundException(id));
  }

  public void createIssue(Issue issue) {
    issueRepository.save(issue);
  }

  public void deleteIssue(Long id) {
    if (!issueRepository.existsById(id)) {
      throw new IssueNotFoundException(id);
    }
    issueRepository.deleteById(id);
  }

  public Issue assignIssue(Long issueId, Long userId) {
    Issue issue = findById(issueId);

    if (userId != null) {
      userService.findById(userId);
    }

    issue.setAssigneeId(userId);
    return issueRepository.save(issue);
  }

  public Issue updateIssueStatus(Long issueId, IssueStatus status) {
    Issue issue = findById(issueId);

    issue.setStatus(status);

    return issueRepository.save(issue);
  }

  public ProjectBoardResponse getProjectBoard(Long projectId) {
    projectService.findById(projectId);

    List<Issue> issues = issueRepository.findByProjectId(projectId);

    List<Issue> todo = new ArrayList<>();
    List<Issue> inProgress = new ArrayList<>();
    List<Issue> done = new ArrayList<>();

    for (Issue issue : issues) {
      switch (issue.getStatus()) {
        case TODO:
          todo.add(issue);
          break;
        case IN_PROGRESS:
          inProgress.add(issue);
          break;
        case DONE:
          done.add(issue);
          break;
      }
    }

    return new ProjectBoardResponse(todo, inProgress, done);
  }
}
