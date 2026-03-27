import type { ClassValue } from "clsx";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Status } from "#/types/types";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function getInitials(name?: string) {
	if (!name) return "?";

	return name
		.split(" ")
		.map((part) => part[0])
		.join("")
		.toUpperCase()
		.slice(0, 2);
}

export function getAccent(status: Status) {
	switch (status) {
		case Status.TODO:
			return "border-l-sky-300";
		case Status.IN_PROGRESS:
			return "border-l-indigo-200";
		case Status.DONE:
			return "border-l-muted-foreground/50 opacity-70";
	}
}

export function getBadge(status: Status) {
	switch (status) {
		case Status.TODO:
			return "bg-sky-100 text-sky-700";
		case Status.IN_PROGRESS:
			return "bg-indigo-100 text-indigo-700";
		case Status.DONE:
			return "bg-muted text-muted-foreground line-through";
	}
}
