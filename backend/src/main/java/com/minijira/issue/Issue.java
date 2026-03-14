package com.minijira.issue;

import org.springframework.data.annotation.Id;

public class Issue {
  @Id
  private Long id;
  private String title;
  private String description;
  private IssueStatus status;
  private Integer position;

  public Issue() {
  }

  public Issue(Long id, String title, String description, IssueStatus status, Integer position) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.status = status;
    this.position = position;
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
}
