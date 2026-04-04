import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { fadeUpContainer, fadeUpItem } from "../motion/variants";

export default function Hero() {
	return (
		<section className="py-28 px-6 text-center">
			<motion.div
				className="max-w-7xl mx-auto"
				variants={fadeUpContainer}
				initial="hidden"
				animate="show"
			>
				<motion.h1
					className="font-headline text-5xl md:text-7xl font-extrabold tracking-tight mb-8 max-w-4xl mx-auto leading-[1.1]"
					variants={fadeUpItem}
					initial="hidden"
					animate="show"
				>
					Architecting the future of <br className="hidden md:block" />
					<span className="text-teal-700">high-velocity</span> teams
				</motion.h1>

				<motion.p
					className="font-body text-xl  max-w-2xl mx-auto mb-10 leading-relaxed"
					variants={fadeUpItem}
					initial="hidden"
					animate="show"
				>
					Move beyond spreadsheets. Executive Architect provides the precision
					engineering tools required to manage complex backlogs and deliver at
					scale.
				</motion.p>

				<motion.div
					className="flex justify-center gap-5"
					variants={fadeUpItem}
					initial="hidden"
					animate="show"
				>
					<Button className="p-7 text-lg font-bold primary-gradient hover:scale-95 hover:cursor-pointer">
						Start for free <ArrowRight className=" h-4 w-4" />
					</Button>
				</motion.div>
			</motion.div>
		</section>
	);
}
