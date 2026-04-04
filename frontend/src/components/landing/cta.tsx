export default function CTA() {
	return (
		<section className="max-w-7xl mx-auto px-8 py-32 ">
			<div className="primary-gradient rounded-[3rem] p-12 md:p-24 text-center overflow-hidden text-primary-foreground">
				<div className="pointer-events-none absolute inset-0 opacity-90"></div>
				<div className="relative z-10">
					<h2 className="font-headline text-4xl md:text-6xl font-extrabold tracking-tight mb-8">
						Ready to build something <br />
						extraordinary?
					</h2>
					<p className="text-primary-foreground">
						Join over 10,000 engineering teams who have traded chaos for the
						precision of Executive Architect.
					</p>
					<button
						className="bg-background text-primary font-headline font-bold text-lg px-12 py-5 rounded-xl hover:bg-gray-50"
						type="submit"
					>
						Get started for free
					</button>
				</div>
			</div>
		</section>
	);
}
