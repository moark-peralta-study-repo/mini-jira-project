import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import AppHeader from "#/components/ui/AppHeader";
import Sidebar from "#/components/ui/Sidebar";
import { isAuthenticated } from "#/lib/utils";

export const Route = createFileRoute("/_authenticated")({
	beforeLoad: async ({ location }) => {
		const authed = await isAuthenticated();

		if (!authed) {
			throw redirect({
				to: "/login",
				search: {
					redirect: location.href,
				},
			});
		}
	},
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="min-h-screen flex flex-col">
			<AppHeader />
			<div className="flex flex-1">
				<Sidebar />

				<main className="flex-1 p-6">
					<Outlet />
				</main>
			</div>
		</div>
	);
}
