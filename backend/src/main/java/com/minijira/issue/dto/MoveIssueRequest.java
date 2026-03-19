package com.minijira.issue.dto;

import com.minijira.issue.IssueStatus;

public record MoveIssueRequest(IssueStatus newStatus, Integer newPosition) {
}
