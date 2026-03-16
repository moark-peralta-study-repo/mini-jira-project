package com.minijira.project.dto;

import java.util.List;

import com.minijira.issue.Issue;

public class ProjectBoardResponse {

  private List<Issue> todo;
  private List<Issue> inProgress;
  private List<Issue> done;

  public List<Issue> getTodo() {
    return todo;
  }

  public void setTodo(List<Issue> todo) {
    this.todo = todo;
  }

  public List<Issue> getInProgress() {
    return inProgress;
  }

  public void setInProgress(List<Issue> inProgress) {
    this.inProgress = inProgress;
  }

  public List<Issue> getDone() {
    return done;
  }

  public void setDone(List<Issue> done) {
    this.done = done;
  }

}
