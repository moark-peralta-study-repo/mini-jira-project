package com.minijira.issue.dto;

import jakarta.validation.Valid;

public record AssignIssueRequest(@Valid Long assigneeId) {
}
