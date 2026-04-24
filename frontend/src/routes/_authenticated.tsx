import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
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
	return <Outlet />;
}
