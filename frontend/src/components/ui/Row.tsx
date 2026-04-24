import type { ReactNode } from "react";

type RowProps = {
	children: ReactNode;
};

export default function Row({ children }: RowProps) {
	return <div className="flex flex-col gap-6">{children}</div>;
}
