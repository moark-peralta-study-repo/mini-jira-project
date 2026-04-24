import { Link } from "@tanstack/react-router";
import NavLink from "./navlink";

const rightLinks = [
	{ label: "Login", to: "/login" },
	{ label: "Signup", to: "/register" },
];

export default function NavBar() {
	return (
		<nav className="flex justify-between ">
			<div className="flex gap-6">
				<Link
					to="/"
					className="text-xl font-bold font-metropolis text-teal-700"
				>
					Executive Architect
				</Link>
			</div>
			<div className="flex gap-6">
				{rightLinks.map((link) => (
					<NavLink key={link.to} {...link} />
				))}
			</div>
		</nav>
	);
}
