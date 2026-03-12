package com.minijira.issue;

import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class IssueService {

  private final IssueRepository issueRepository;

  public IssueService(IssueRepository issueRepository) {
    this.issueRepository = issueRepository;
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
}
