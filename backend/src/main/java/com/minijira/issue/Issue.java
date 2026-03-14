package com.minijira.issue;

import org.springframework.data.annotation.Id;

public class Issue {
  @Id
  private Long id;
  private String title;
  private String description;
  private IssueStatus status;
  private Integer position;
  private Long projectId;
  private Long asigneeId;

  public Issue() {
  }

  public Issue(Long id, String title, String description, IssueStatus status, Integer position, Long projectId,
      Integer userId) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.status = status;
    this.position = position;
    this.projectId = projectId;
    this.asigneeId = asigneeId;
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getTitle() {
    return title;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public IssueStatus getStatus() {
    return status;
  }

  public void setStatus(IssueStatus status) {
    this.status = status;
  }

  public Integer getPosition() {
    return position;
  }

  public void setPosition(Integer position) {
    this.position = position;
  }

  public Long getProjectId() {
    return projectId;
  }

  public void setProjectId(Long projectId) {
    this.projectId = projectId;
  }

  public Long getAsigneeId() {
    return asigneeId;
  }

  public void setAsigneeId(Long asigneeId) {
    this.asigneeId = asigneeId;
  }

}
