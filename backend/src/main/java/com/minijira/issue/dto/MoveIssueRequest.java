package com.minijira.issue.dto;

import com.minijira.issue.IssueStatus;

public class MoveIssueRequest {
  private IssueStatus newStatus;
  private Integer newPosition;

  public MoveIssueRequest() {
  }

  public MoveIssueRequest(IssueStatus newStatus, Integer newPosition) {
    this.newStatus = newStatus;
    this.newPosition = newPosition;
  }

  public IssueStatus getNewStatus() {
    return newStatus;
  }

  public void setNewStatus(IssueStatus newStatus) {
    this.newStatus = newStatus;
  }

  public Integer getNewPosition() {
    return newPosition;
  }

  public void setNewPosition(Integer newPosition) {
    this.newPosition = newPosition;
  }
}
