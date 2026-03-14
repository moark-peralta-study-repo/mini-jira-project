package com.minijira.issue;

import java.util.List;

import org.springframework.data.repository.ListCrudRepository;

public interface IssueRepository extends ListCrudRepository<Issue, Long> {

  List<Issue> findIssuesByProjectId(Long projectId);

  List<Issue> findIssueByAsigneeId(Long asigneeId);

}
