package com.minijira.issue.dto;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;

import com.minijira.issue.IssueStatus;

public record UpdateIssueStatusRequest(@Valid @NotNull IssueStatus status) {
}
