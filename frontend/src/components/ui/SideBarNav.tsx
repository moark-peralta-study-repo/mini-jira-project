import { Link } from "@tanstack/react-router";
import { ClipboardList, FolderOpen, Settings } from "lucide-react";

export default function SideBarNav() {
	const navItems = [
		{ to: "/projects", label: "Projects", icon: FolderOpen },
		{ to: "/backlogs", label: "Backlogs", icon: ClipboardList },
		{ to: "/settings", label: "Settings", icon: Settings },
	];

	return (
		<nav>
			<ul className="flex flex-col gap-2">
				{navItems.map(({ to, label, icon: Icon }) => (
					<li key={to}>
						<Link
							to={to}
							activeProps={{
								className:
									"bg-blue-grey-50 text-blue-grey-800 [&_svg]:text-primary",
							}}
							className="flex items-center gap-6 rounded-sm px-6 py-3 text-base font-medium text-muted-foreground transition-all duration-300 hover:bg-blue-grey-50 hover:text-blue-grey-800 [&_svg]:h-6 [&_svg]:text-blue-grey-400 [&_svg]:transition-all [&_svg]:duration-300 hover:[&_svg]:text-primary"
						>
							<Icon />
							<span>{label}</span>
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}
