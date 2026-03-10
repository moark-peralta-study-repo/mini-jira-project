import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: App });

function App() {
	return <h1 className="teal-500 font-extrabold">Hello, World</h1>;
}
