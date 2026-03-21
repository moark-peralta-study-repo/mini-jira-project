import { createFileRoute } from "@tanstack/react-router";
import CTA from "#/components/landing/cta";
import Demo from "#/components/landing/demo";
import Features from "#/components/landing/features";
import Hero from "#/components/landing/hero";

export const Route = createFileRoute("/")({ component: LandingPage });

function LandingPage() {
	return (
		<main>
			<Hero />
			<Demo />
			<Features />
			<CTA />
		</main>
	);
}
