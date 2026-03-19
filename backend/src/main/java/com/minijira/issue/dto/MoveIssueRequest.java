package com.minijira.issue.dto;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;

import com.minijira.issue.IssueStatus;

public record MoveIssueRequest(@NotNull IssueStatus newStatus, @NotNull @Min(0) Integer newPosition) {
}
