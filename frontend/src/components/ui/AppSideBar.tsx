import { useState } from "react";
import NavLink from "../navlink";
import Row from "./Row";

const sideBarLinks = ["Projects", "Backlogs", "Settings"];

export default function AppSideBar() {
	const [active, setActive] = useState("Projects");

	return (
		<Row>
			{sideBarLinks.map((link) => (
				<NavLink
					key={link}
					label={link}
					active={active === link}
					onMouseEnter={() => setActive(link)}
				/>
			))}
		</Row>
	);
}
