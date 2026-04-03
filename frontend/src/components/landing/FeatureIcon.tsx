import type { LucideIcon } from "lucide-react";

type FeatureIconProps = {
	icon: LucideIcon;
	description: string;
	title: string;
};

export default function FeatureIcon({
	icon: Icon,
	description,
	title,
}: FeatureIconProps) {
	return (
		<div className="group">
			<div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition transform shadow-md bg-slate-50">
				<Icon className="w-7 h-7 text-teal-600" strokeWidth={2.5} />
			</div>
			<h6 className="font-sans text-xl font-bold mb-4">{title}</h6>
			<p className="leading-relaxed">{description}</p>
		</div>
	);
}
