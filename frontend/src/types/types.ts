export enum Status {
	TODO = "TODO",
	IN_PROGRESS = "IN_PROGRESS",
	DONE = "DONE",
}

export type IssueAPIResponse = {
	id: number;
	title: string;
	description: string;
	status: Status;
	position: number;
	projectId: number;
	assigneeId: number | null;
};
