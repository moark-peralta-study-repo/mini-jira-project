package com.minijira.issue;

import java.util.List;

import com.minijira.user.UserService;

import org.springframework.stereotype.Service;

@Service
public class IssueService {

  private final IssueRepository issueRepository;
  private final UserService userService;

  public IssueService(IssueRepository issueRepository, UserService userService) {
    this.issueRepository = issueRepository;
    this.userService = userService;
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

  public Issue assignIssueToUser(Long issueId, Long userId) {
    Issue issue = findById(issueId);

    if (userId != null) {
      userService.findById(userId);
    }

    issue.setAssigneeId(userId);
    return issueRepository.save(issue);
  }
}
