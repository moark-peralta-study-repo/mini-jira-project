import { useDraggable } from "@dnd-kit/react";
import type { IssueAPIResponse } from "#/types/types";
import TaskCard from "./TaskCard";

type DraggableTaskCardProps = {
	issue: IssueAPIResponse;
	assigneeName?: string;
};

export default function DraggableTaskCard({
	issue,
	assigneeName,
}: DraggableTaskCardProps) {
	const { ref, isDragging } = useDraggable({
		id: String(issue.id),
		data: {
			issueId: issue.id,
			status: issue.status,
		},
	});

	return (
		<div ref={ref} className="touch-none">
			<TaskCard
				issue={issue}
				assigneeName={assigneeName}
				isDragging={isDragging}
			/>
		</div>
	);
}
