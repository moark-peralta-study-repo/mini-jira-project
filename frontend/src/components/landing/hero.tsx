import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

export default function Hero() {
	return (
		<section className="py-28 px-6 text-center">
			<div className="max-w-4xl mx-auto">
				<h1 className="text-5xl font-extrabold mb-4">
					Architecting the future of <br className="hidden md:block" />
					<span className="text-teal-600">high-velocity</span> teams
				</h1>

				<p className="max-w-140 mx-auto text-center text-muted-foreground leading-normal text-lg mb-5">
					Move beyond spreadsheets. Executive Architect provides the precision
					engineering tools required to manage complex backlogs and deliver at
					scale.
				</p>

				<div className="flex justify-center gap-3">
					<Button className="p-5 text-[12px] font-bold">
						Start for free <ArrowRight className=" h-4 w-4" />
					</Button>

					<Button variant="secondary">Watch Demo</Button>
				</div>
			</div>
		</section>
	);
}
