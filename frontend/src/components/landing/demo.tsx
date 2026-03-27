import { DragDropProvider } from "@dnd-kit/react";
import { useMemo, useState } from "react";
import { type IssueAPIResponse, Status } from "../../types/types.ts";
import BoardShowcase from "../BoardShowCase.tsx";

const users = {
	1: { name: "John Doe" },
	2: { name: "Alice Smith" },
	3: { name: "Mark Kim" },
};

const initialIssues: IssueAPIResponse[] = [
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
	{
		id: 402,
		title: "Implement WebGL rendering engine for architect view",
		description: "Architect view renderer",
		status: Status.IN_PROGRESS,
		position: 1,
		projectId: 1,
		assigneeId: 1,
	},
	{
		id: 390,
		title: "API Documentation: V2 Schema rollout",
		description: "Schema rollout",
		status: Status.DONE,
		position: 1,
		projectId: 1,
		assigneeId: 1,
	},
];

function groupIssues(items: IssueAPIResponse[]) {
	return {
		todo: items.filter((i) => i.status === Status.TODO),
		inProgress: items.filter((i) => i.status === Status.IN_PROGRESS),
		done: items.filter((i) => i.status === Status.DONE),
	};
}

export default function Demo() {
	const [issues, setIssues] = useState<IssueAPIResponse[]>(initialIssues);

	const boardData = useMemo(() => groupIssues(issues), [issues]);

	return (
		<DragDropProvider
			onDragEnd={(event) => {
				if (event.canceled) return;

				const issueId = Number(event.operation.source?.id);
				const newStatus = event.operation.target?.id as Status | undefined;

				if (!newStatus) return;

				setIssues((current) =>
					current.map((issue) =>
						issue.id === issueId ? { ...issue, status: newStatus } : issue,
					),
				);
			}}
		>
			<BoardShowcase data={boardData} users={users} />
		</DragDropProvider>
	);
}
