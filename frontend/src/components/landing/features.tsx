import { ArchiveIcon, ChartSpline, Users } from "lucide-react";
import FeatureIcon from "./FeatureIcon";

export default function features() {
	return (
		<section className="bg-slate-100 py-32">
			<div className="max-w-7xl mx-auto px-8">
				<div className="mb-20">
					<h2 className="font-headline text-4xl font-extrabold tracking-tight mb-4">
						Engineered for Focus
					</h2>
					<p>
						Every featue is designed to reduce cognitive load and accelerate
						delivery cycles.
					</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
					<FeatureIcon
						title={"Backlog Management"}
						icon={ArchiveIcon}
						description="Prioritize tasks with an editorial touch. Our tiered backlog system ensures nothing is lost and the next step is always clear."
					/>

					<FeatureIcon
						title={"Real-time Collaboration"}
						icon={Users}
						description="Experience zero-latency syncing. See cursor movements, live updates, and instant feedback without refreshing the page."
					/>

					<FeatureIcon
						title={"Agile Reporting"}
						icon={ChartSpline}
						description="Beautifully rendered velocity charts and burn-down reports that give stakeholders the confidence of a well-run machine."
					/>
				</div>
			</div>
		</section>
	);
}
