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

  public Issue createIssue(Issue issue) {
    projectService.findById(issue.getProjectId());

    issue.setStatus(IssueStatus.TODO);
    int position = issueRepository.findByProjectIdAndStatus(issue.getProjectId(), issue.getStatus()).size();

    issue.setPosition(position);

    return issueRepository.save(issue);
  }

  public void deleteIssue(Long id) {
    Issue issue = findById(id);

    Long projectId = issue.getProjectId();
    IssueStatus status = issue.getStatus();
    Integer deletedPosition = issue.getPosition();

    List<Issue> column = issueRepository.findByProjectIdAndStatus(projectId, status);

    for (Issue i : column) {
      if (i.getId().equals(id))
        continue;

      if (i.getPosition() > deletedPosition) {
        i.setPosition(i.getPosition() - 1);
      }
    }

    issueRepository.deleteById(id);

    issueRepository.saveAll(column);
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

    List<Issue> issues = issueRepository.findByProjectIdOrderByStatusAscPositionAsc(projectId);

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

  public Issue moveIssue(Long issueId, IssueStatus newStatus, Integer newPosition) {
    Issue issue = findById(issueId);

    IssueStatus oldStatus = issue.getStatus();
    Integer oldPosition = issue.getPosition();
    Long projectId = issue.getProjectId();

    List<Issue> oldColumn = issueRepository.findByProjectIdAndStatus(projectId, oldStatus);
    List<Issue> newColumn = issueRepository.findByProjectIdAndStatus(projectId, newStatus);

    if (oldStatus == newStatus) {

      for (Issue i : oldColumn) {
        if (i.getId().equals(issueId))
          continue;

        if (oldPosition < newPosition) {
          if (i.getPosition() > oldPosition && i.getPosition() <= newPosition) {
            i.setPosition(i.getPosition() - 1);
          }
        }

        else if (oldPosition > newPosition) {
          if (i.getPosition() >= newPosition && i.getPosition() < oldPosition) {
            i.setPosition(i.getPosition() + 1);
          }
        }
      }
    } else {
      for (Issue i : oldColumn) {
        if (i.getId().equals(issueId))
          continue;

        if (i.getPosition() > oldPosition) {
          i.setPosition(i.getPosition() - 1);
        }
      }

      for (Issue i : newColumn) {
        if (i.getPosition() >= newPosition) {
          i.setPosition(i.getPosition() + 1);
        }
      }
      issue.setStatus(newStatus);
    }

    issue.setPosition(newPosition);

    issueRepository.saveAll(oldColumn);
    issueRepository.saveAll(newColumn);

    return issueRepository.save(issue);
  }
}
