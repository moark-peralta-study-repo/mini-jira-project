import { DragDropProvider } from "@dnd-kit/react";
import { useState } from "react";
import { type IssueAPIResponse, Status } from "../../types/types.ts";
import BoardShowcase from "../BoardShowCase.tsx";

const users = {
	1: { name: "John Doe" },
	2: { name: "Alice Smith" },
	3: { name: "Mark Kim" },
};

type ColumnsState = Record<Status, IssueAPIResponse[]>;

const initialColumns: ColumnsState = {
	[Status.TODO]: [
		{
			id: 398,
			title: "Design System: Tonal layering and elevation specs",
			description: "Elevation + layering",
			status: Status.TODO,
			position: 1,
			projectId: 1,
			assigneeId: 2,
		},
		{
			id: 405,
			title: "Refactor authentication middleware for Edge workers",
			description: "Edge workers auth refactor",
			status: Status.TODO,
			position: 2,
			projectId: 1,
			assigneeId: null,
		},
	],
	[Status.IN_PROGRESS]: [
		{
			id: 402,
			title: "Implement WebGL rendering engine for architect view",
			description: "Architect view renderer",
			status: Status.IN_PROGRESS,
			position: 1,
			projectId: 1,
			assigneeId: 1,
		},
	],
	[Status.DONE]: [
		{
			id: 390,
			title: "API Documentation: V2 Schema rollout",
			description: "Schema rollout",
			status: Status.DONE,
			position: 1,
			projectId: 1,
			assigneeId: 1,
		},
	],
};

function reindex(items: IssueAPIResponse[], status: Status) {
	return items.map((issue, index) => ({
		...issue,
		status,
		position: index + 1,
	}));
}

function findColumn(
	columns: ColumnsState,
	issueId: number,
): Status | undefined {
	return (Object.keys(columns) as Status[]).find((status) =>
		columns[status].some((issue) => issue.id === issueId),
	);
}

export default function Demo() {
	const [columns, setColumns] = useState<ColumnsState>(initialColumns);

	const boardData = {
		todo: columns[Status.TODO],
		inProgress: columns[Status.IN_PROGRESS],
		done: columns[Status.DONE],
	};

	return (
		<DragDropProvider
			onDragEnd={(event) => {
				if (event.canceled) return;

				const activeId = Number(event.operation.source?.id);
				const overId = event.operation.target?.id;

				if (!activeId || !overId) return;

				setColumns((current) => {
					const sourceStatus = findColumn(current, activeId);
					if (!sourceStatus) return current;

					const sourceItems = [...current[sourceStatus]];
					const sourceIndex = sourceItems.findIndex(
						(issue) => issue.id === activeId,
					);

					if (sourceIndex === -1) return current;

					const movingItem = sourceItems[sourceIndex];

					// Dropped directly on a column
					const droppedOnColumn = Object.values(Status).includes(
						overId as Status,
					);

					if (droppedOnColumn) {
						const targetStatus = overId as Status;

						if (targetStatus === sourceStatus) return current;

						sourceItems.splice(sourceIndex, 1);
						const targetItems = [...current[targetStatus], movingItem];

						return {
							...current,
							[sourceStatus]: reindex(sourceItems, sourceStatus),
							[targetStatus]: reindex(targetItems, targetStatus),
						};
					}

					// Dropped on another card
					const overIssueId = Number(overId);
					const targetStatus = findColumn(current, overIssueId);

					if (!targetStatus) return current;

					const targetItems = [...current[targetStatus]];
					const targetIndex = targetItems.findIndex(
						(issue) => issue.id === overIssueId,
					);

					if (targetIndex === -1) return current;

					// Same column reorder
					if (sourceStatus === targetStatus) {
						const reordered = [...sourceItems];
						const [removed] = reordered.splice(sourceIndex, 1);
						reordered.splice(targetIndex, 0, removed);

						return {
							...current,
							[sourceStatus]: reindex(reordered, sourceStatus),
						};
					}

					// Cross-column insert
					sourceItems.splice(sourceIndex, 1);
					targetItems.splice(targetIndex, 0, movingItem);

					return {
						...current,
						[sourceStatus]: reindex(sourceItems, sourceStatus),
						[targetStatus]: reindex(targetItems, targetStatus),
					};
				});
			}}
		>
			<BoardShowcase data={boardData} users={users} />
		</DragDropProvider>
	);
}
