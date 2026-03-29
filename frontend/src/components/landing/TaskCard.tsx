import { motion } from "framer-motion";
import { getAccent, getBadge, getInitials } from "#/lib/utils";
import { type IssueAPIResponse, Status } from "#/types/types";

type TaskCardProps = {
	issue: IssueAPIResponse;
	assigneeName?: string;
	isDragging?: boolean;
};
export default function TaskCard({
	issue,
	assigneeName,
	isDragging = false,
}: TaskCardProps) {
	const initials = getInitials(assigneeName);

	return (
		<motion.div
			layout
			animate={{
				scale: isDragging ? 1.03 : 1,
				rotate: isDragging ? 1.5 : 0,
			}}
			transition={{
				layout: { type: "spring", stiffness: 500, damping: 30 },
				scale: { type: "spring", stiffness: 500, damping: 25 },
				rotate: { type: "spring", stiffness: 400, damping: 20 },
			}}
			className={`relative rounded-2xl border border-border border-l-4 bg-card p-5 shadow-sm cursor-grab active:cursor-grabbing
		transition-all duration-150 ease-out
		hover:-translate-y-0.5 hover:shadow-lg hover:z-10
		${getAccent(issue.status)}`}
		>
			<div className="mb-4 flex items-start justify-between">
				<span
					className={`rounded px-2 py-0.5 text-[10px] font-bold ${getBadge(
						issue.status,
					)}`}
				>
					EA-{issue.id}
				</span>

				<span className="text-muted-foreground">•••</span>
			</div>

			<p
				className={`mb-5 text-sm font-semibold leading-snug ${
					issue.status === Status.DONE
						? "line-through text-muted-foreground"
						: ""
				}`}
			>
				{issue.title}
			</p>

			<div className="flex items-center justify-between">
				<div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-card bg-primary text-[10px] font-bold text-primary-foreground">
					{initials}
				</div>

				{issue.status === Status.DONE ? (
					<span className="text-muted-foreground">○</span>
				) : issue.status === Status.IN_PROGRESS ? (
					<span className="text-sky-700">↗</span>
				) : (
					<span className="text-red-500">!</span>
				)}
			</div>
		</motion.div>
	);
}
