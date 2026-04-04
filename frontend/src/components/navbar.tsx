import { useState } from "react";
import NavLink from "./navlink";

const leftLinks = ["Home", "About", "Projects"];
const rightLinks = ["Login", "Signup"];

export default function NavBar() {
	const [active, setActive] = useState("Home");

	return (
		<nav className="flex justify-between ">
			<div className="flex gap-6">
				<h1 className="text-xl font-bold font-metropolis text-teal-700">
					Executive Architect
				</h1>
				{leftLinks.map((link) => (
					<NavLink
						key={link}
						label={link}
						active={active === link}
						onMouseEnter={() => setActive(link)}
					/>
				))}
			</div>
			<div className="flex gap-6">
				{rightLinks.map((link) => (
					<NavLink key={link} label={link} active={active === link} />
				))}
			</div>
		</nav>
	);
}
