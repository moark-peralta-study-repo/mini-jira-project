import type { IssueAPIResponse } from "#/types/types";
import Board from "./Board";

type UserMap = Record<number, { name: string }>;

type BoardData = {
	todo: IssueAPIResponse[];
	inProgress: IssueAPIResponse[];
	done: IssueAPIResponse[];
};

type BoardShowcaseProps = {
	data: BoardData;
	users: UserMap;
	progressPercent: number;
};

export default function BoardShowcase({
	data,
	users,
	progressPercent,
}: BoardShowcaseProps) {
	return (
		<section className="mx-auto mb-32 max-w-7xl px-8">
			<div className="rounded-4xl bg-muted/40 p-4  md:p-8">
				<div className="overflow-hidden rounded-3xl  border-border bg-card shadow-2xl">
					<div className="flex h-14 items-center justify-between  border-border bg-gray-100 px-6">
						<div className="flex items-center gap-4 bg-">
							<div className="flex gap-2">
								<div className="h-3 w-3 rounded-full bg-red-300" />
								<div className="h-3 w-3 rounded-full bg-sky-300" />
								<div className="h-3 w-3 rounded-full bg-blue-300" />
							</div>

							<span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
								Sprint 24: Engineering Atelier
							</span>
						</div>

						<div className="flex items-center gap-3">
							<div className="h-2 w-32 overflow-hidden rounded-full bg-secondary">
								<div
									className="h-full transition-all bg-primary duration-300"
									style={{ width: `${progressPercent}%` }}
								/>
							</div>
							<span className="text-[12px] font-bold uppercase tracking-wide text-primary">
								{progressPercent}% Done
							</span>
						</div>
					</div>

					<div className="p-6">
						<Board data={data} users={users} />
					</div>
				</div>
			</div>
		</section>
	);
}
