import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

export default function Hero() {
	return (
		<section className="py-28 px-6 text-center">
			<div className="max-w-7xl mx-auto">
				<h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tight mb-8 max-w-4xl mx-auto leading-[1.1]">
					Architecting the future of <br className="hidden md:block" />
					<span className="text-teal-600">high-velocity</span> teams
				</h1>

				<p className="font-body text-xl  max-w-2xl mx-auto mb-10 leading-relaxed">
					Move beyond spreadsheets. Executive Architect provides the precision
					engineering tools required to manage complex backlogs and deliver at
					scale.
				</p>

				<div className="flex justify-center gap-3">
					<Button className="p-5  font-bold">
						Start for free <ArrowRight className=" h-4 w-4" />
					</Button>

					<Button variant="secondary">Watch Demo</Button>
				</div>
			</div>
		</section>
	);
}
