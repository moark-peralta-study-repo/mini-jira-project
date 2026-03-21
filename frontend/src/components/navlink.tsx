import { motion } from "framer-motion";

type NavLinkProps = {
	label: string;
	active: boolean;
	onMouseEnter?: () => void;
};

export default function NavLink({ label, active, onMouseEnter }: NavLinkProps) {
	return (
		<button
			type="button"
			onMouseEnter={onMouseEnter}
			className="relative pb-3 text-teal-700/60  font-extrabold transition"
		>
			{active && (
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

			<span className={active ? "text-teal-600 font-extrabold" : ""}>
				{label}
			</span>
		</button>
	);
}
