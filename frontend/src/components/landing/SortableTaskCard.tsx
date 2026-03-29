import { useSortable } from "@dnd-kit/react/sortable";
import type { IssueAPIResponse } from "#/types/types";
import TaskCard from "./TaskCard";

type DraggableTaskCardProps = {
	issue: IssueAPIResponse;
	index: number;
	assigneeName?: string;
};

export default function DraggableTaskCard({
	issue,
	index,
	assigneeName,
}: DraggableTaskCardProps) {
	const { ref, isDragging } = useSortable({
		id: issue.id,
		index,
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
