import { TanStackDevtools } from "@tanstack/react-devtools";
import type { QueryClient } from "@tanstack/react-query";
import {
	createRootRouteWithContext,
	HeadContent,
	Outlet,
	Scripts,
} from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";

import TanStackQueryDevtools from "../integrations/tanstack-query/devtools";
import TanStackQueryProvider from "../integrations/tanstack-query/root-provider";
import appCss from "../styles.css?url";
import { Button } from "#/components/ui/button";
import { MoveLeft } from "lucide-react";
import { useGoBack } from "#/hooks/useGoBack";

interface MyRouterContext {
	queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
	head: () => ({
		meta: [
			{
				charSet: "utf-8",
			},
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{
				title: "Executive Architect",
			},
		],
		links: [
			{
				rel: "stylesheet",
				href: appCss,
			},
		],
	}),
	shellComponent: RootDocument,
	notFoundComponent: NotFound,
});

function RootDocument() {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<script />
				<HeadContent />
			</head>
			<body>
				<TanStackQueryProvider>
					<Outlet />
					<TanStackDevtools
						config={{
							position: "bottom-right",
						}}
						plugins={[
							{
								name: "Tanstack Router",
								render: <TanStackRouterDevtoolsPanel />,
							},
							TanStackQueryDevtools,
						]}
					/>
				</TanStackQueryProvider>
				<Scripts />
			</body>
		</html>
	);
}

function NotFound() {
	const moveBack = useGoBack();

	return (
		<div className="flex items-center justify-center padding-[4.8rem] h-screen bg-blue-grey-100 rounded-md ">
			<div className="bg-blue-grey-50 border border-blue-grey-200 rounded-md padding-[4.8rem] flex-col grow-0 shrink basis-384 text-center items-center justify-center m-b-[3rem]">
				<h1 className="text-[3rem] font-semibold p-20">
					The page you are looking for could not be found.
				</h1>

				<Button className="mb-10" onClick={moveBack} variant={"secondary"}>
					<MoveLeft />
					Go back
				</Button>
			</div>
		</div>
	);
}
