package com.minijira.issue;

import java.util.List;

import jakarta.validation.Valid;

import com.minijira.issue.dto.AssignIssueRequest;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/issues")
public class IssueController {

  private final IssueService issueService;

  public IssueController(IssueService issueService) {
    this.issueService = issueService;
  }

  @GetMapping
  List<Issue> findAllIssues() {
    return issueService.findAllIssues();
  }

  @PostMapping
  @ResponseStatus(HttpStatus.CREATED)
  void createIssue(@RequestBody @Valid Issue issue) {
    issueService.createIssue(issue);
  }

  @GetMapping("/{id}")
  Issue findById(@PathVariable Long id) {
    return issueService.findById(id);
  }

  @DeleteMapping("/{id}")
  @ResponseStatus(HttpStatus.NO_CONTENT)
  void deleteIssue(@PathVariable Long id) {
    issueService.deleteIssue(id);
  }

  @PatchMapping("/{issueId}/assign")
  Issue assignIssueToUser(@PathVariable Long issueId, @RequestBody @Valid AssignIssueRequest request) {
    return issueService.assignIssueToUser(issueId, request.getAssigneeId());
  }
}
