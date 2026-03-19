package com.minijira.issue;

import java.util.List;

import org.springframework.data.repository.ListCrudRepository;

public interface IssueRepository extends ListCrudRepository<Issue, Long> {

  List<Issue> findByProjectId(Long projectId);

  List<Issue> findByProjectIdAndStatus(Long projectId, IssueStatus status);

  List<Issue> findByProjectIdOrderByStatusAscPositionAsc(Long projectId);
}
