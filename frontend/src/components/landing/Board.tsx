import { type IssueAPIResponse, Status } from "#/types/types";
import BoardColumn from "./BoardColumn";

type BoardData = {
	todo: IssueAPIResponse[];
	inProgress: IssueAPIResponse[];
	done: IssueAPIResponse[];
};

type UserMap = Record<number, { name: string }>;

type BoardProps = {
	data: BoardData;
	users: UserMap;
};

export default function Board({ data, users }: BoardProps) {
	return (
		<div className="grid h-128 grid-cols-1 gap-6 md:grid-cols-3">
			<BoardColumn
				title="To Do"
				status={Status.TODO}
				issues={data.todo}
				users={users}
				countClassName="bg-secondary text-secondary-foreground"
			/>

			<BoardColumn
				title="In Progress"
				status={Status.IN_PROGRESS}
				issues={data.inProgress}
				users={users}
				countClassName="bg-sky-100 text-sky-700"
			/>

			<BoardColumn
				title="Done"
				status={Status.DONE}
				issues={data.done}
				users={users}
				countClassName="bg-muted text-muted-foreground"
			/>
		</div>
	);
}
