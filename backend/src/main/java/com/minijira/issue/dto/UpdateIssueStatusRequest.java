package com.minijira.issue.dto;

import jakarta.validation.constraints.NotNull;

import com.minijira.issue.IssueStatus;

public class UpdateIssueStatusRequest {
  @NotNull
  private IssueStatus status;

  public IssueStatus getStatus() {
    return status;
  }

  public void setStatus(IssueStatus status) {
    this.status = status;
  }
}
