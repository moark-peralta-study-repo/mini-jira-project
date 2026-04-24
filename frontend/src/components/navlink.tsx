import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";

type NavLinkProps = {
	label: string;
	to: string;
};

export default function NavLink({ label, to }: NavLinkProps) {
	return (
		<Link
			to={to}
			className="relative pb-3 text-teal-700/60 font-extrabold transition hover:text-teal 600"
		>
			{({ isActive }) => (
				<>
					{isActive && (
						<motion.span
							layoutId="underline"
							className="absolute left-0 bottom-0 h-1 w-full bg-teal-600"
							transition={{
								type: "spring",
								stiffness: 500,
								damping: 30,
							}}
						/>
					)}
					<span className={isActive ? "text-teal-600 font-extrabold" : ""}>
						{label}
					</span>
				</>
			)}
		</Link>
	);
}
