import SideBarNav from "./SideBarNav";

export default function Sidebar() {
	return (
		<aside className="flex flex-col gap-[3.2rem] bg-gray-50 py-[4.2rem] px-6 border-r border-blue-grey-50">
			<SideBarNav />
		</aside>
	);
}
