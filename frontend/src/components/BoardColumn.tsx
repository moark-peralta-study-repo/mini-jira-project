import { useDroppable } from "@dnd-kit/react";
import type { IssueAPIResponse, Status } from "../types/types.ts";
import DraggableTaskCard from "./SortableTaskCard.tsx";

type UserMap = Record<number, { name: string }>;

type ColumnProps = {
	title: string;
	status: Status;
	issues: IssueAPIResponse[];
	users: UserMap;
	countClassName?: string;
};
export default function Column({
	title,
	status,
	issues,
	users,
	countClassName = "bg-secondary text-secondary-foreground",
}: ColumnProps) {
	const { ref, isDropTarget } = useDroppable({
		id: status,
	});

	return (
		<section
			ref={ref}
			className={`flex flex-col h-full min-h-0 rounded-xl transition ${
				isDropTarget ? "bg-primary/10 ring-1 ring-primary/30" : ""
			}`}
		>
			<div className="mb-2 flex shrink-0 items-center justify-between">
				<h3 className="text-sm font-bold uppercase tracking-tight text-muted-foreground mb-4">
					{title}
				</h3>

				<span
					className={`rounded px-2 py-0.5 text-[10px] font-bold ${countClassName}`}
				>
					{issues.length}
				</span>
			</div>

			<div className="min-h-0 flex-1 space-y-4 overflow-y-auto pr-1 py-2">
				<div className="space-y-4 px-4">
					{issues.map((issue, index) => (
						<DraggableTaskCard
							index={index}
							key={issue.id}
							issue={issue}
							assigneeName={
								issue.assigneeId ? users[issue.assigneeId]?.name : undefined
							}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
