import { DraftingCompass } from "lucide-react";

export default function LeftAuthSection() {
	return (
		<section className="hidden md:flex md:w-1/2 relative flex-col justify-center items-center p-16 overflow-hidden">
			<div className="absolute inset-0 bg-[linear-gradient(135deg,var(--color-teal-900)_0%,var(--color-teal-800)_30%,var(--color-teal-400)_55%,var(--color-teal-600)_75%,var(--color-teal-900)_100%)] bg-size-[300%_300%] animate-[animated-gradient-wave_10s_ease-in-out_infinite]"></div>
			<div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.16)_0%,transparent_28%),radial-gradient(circle_at_80%_20%,rgba(153,246,228,0.22)_0%,transparent_24%),radial-gradient(circle_at_70%_75%,rgba(45,212,191,0.18)_0%,transparent_26%)]"></div>

			<div className="absolute inset-0 pointer-events-none opacity-35 bg-[radial-gradient(rgba(255,255,255,0.6)_1px,transparent_1px)] bg-size-[32px_32px]"></div>

			<div className="absolute inset-0 pointer-events-none opacity-[0.06] bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-size-[72px_72px]"></div>

			<div className="absolute -top-16 -right-12 h-56 w-56 rounded-full blur-[110px] bg-white/10 animate-[floatGlowOne_16s_ease-in-out_infinite]"></div>
			<div className="absolute -bottom-20 -left-12 h-72 w-72 rounded-full blur-[120px] bg-teal-300/15 animate-[floatGlowTwo_20s_ease-in-out_infinite]"></div>

			<div className="absolute top-12 left-12 z-20">
				<span className="flex items-center gap-2 text-2xl font-extrabold tracking-tight text-white">
					<span className="material-symbols-outlined text-white/80">
						<DraftingCompass size={25} />
					</span>
					The Executive Architect
				</span>
			</div>

			<div className="absolute bottom-12 left-12 right-12 z-20">
				<p className="text-sm font-medium tracking-wide text-white/70 uppercase">
					Engineered for Technical Leadership
				</p>
				<p className="mt-2 text-lg font-headline font-semibold text-white">
					Transforming code into architectural clarity.
				</p>
			</div>
		</section>
	);
}
