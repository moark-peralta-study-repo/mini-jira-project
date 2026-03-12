package com.minijira.issue;

import org.springframework.data.repository.ListCrudRepository;

public interface IssueRepository extends ListCrudRepository<Issue, Long> {

}
