import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import FormField from "#/components/ui/FormField";
import LeftAuthSection from "#/components/ui/LeftAuthSection";
import PasswordField from "#/components/ui/PasswordField";

export const Route = createFileRoute("/login")({
	component: RouteComponent,
});

function RouteComponent() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
		e.preventDefault();

		try {
			const response = await fetch("http://localhost:8080/api/auth/login", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					email,
					password,
				}),
			});

			if (!response.ok) {
				let message = "Login Failed";

				try {
					const errorData = await response.json();
					message = errorData.message || message;
				} catch {}

				throw new Error(message);
			}
			const data = await response.json();
			console.log("Login success:", data);
		} catch (err) {
			console.log("Network error:", err);
		}
	}

	return (
		<main className="grow flex flex-col md:flex-row overflow-hidden">
			<LeftAuthSection />
			<section className="w-full md:w-1/2 bg-blue-grey-50 flex flex-col justify-center items-center px-8 py-16 md:p-24 relative">
				<div className="md:hidden absolute top-8 left-8">
					<span>The Executive Architect</span>
				</div>
				<div className="w-full max-w-md">
					<header className="mb-10">
						<h1 className="text-4xl font-extrabold text-foreground tracking-tight mb-3">
							Welcome back
						</h1>

						<p className="text-muted-foreground mb-8">
							Login to your digital atelier.
						</p>

						<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
							{/**TODO Insert button logo */}
							<button
								className="flex items-center justify-center gap-3 py-3 px-4 bg-background border border-blue-grey-100  hover:cursor-pointer hover:bg-blue-grey-50 transition-all duration-200 group"
								type="button"
							>
								<span className="text-sm font-semibold  text-muted-foreground group-hover:text-foreground/80">
									Sign up with Google
								</span>
							</button>

							<button
								className="flex items-center justify-center gap-3 py-3 px-4 bg-background border border-blue-grey-100 hover:cursor-pointer hover:bg-blue-grey-50 transition-all duration-200 group"
								type="button"
							>
								<span className="text-sm font-semibold  text-muted-foreground group-hover:text-foreground/80">
									Sign up with Github
								</span>
							</button>
						</div>

						<div className="relative mb-8">
							<div className="absolute inset-0 flex items-center">
								<div className="w-full border-t border-border/20"></div>
							</div>
							<div className="relative flex justify-center text-xs uppercase tracking-widest">
								<span className="bg-blue-grey-50 px-4 text-muted-foreground/60 font-medium">
									Or continue with email
								</span>
							</div>
						</div>

						<form className="space-y-5" onSubmit={handleSubmit}>
							<FormField
								id="email"
								label="Work Email"
								type="email"
								placeholder="j.doe@executive.com"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>

							<PasswordField
								id="password"
								label="Password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								labelRight={
									<Link
										to="."
										className="text-xs font-bold text-primary hover:underline"
									>
										Forgot Password?
									</Link>
								}
							/>

							<div className="pt-2">
								<button
									className="w-full py-4 primary-gradient text-primary-foreground font-bold rounded-sm shadow-xl shadow-primary/20 hover:cursor-pointer hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
									type="submit"
								>
									Create my workspace
								</button>
							</div>
						</form>

						<p className="mt-7 text-center text-xs text-muted-foreground leading-relaxed">
							By creating an account, you agree to our{" "}
							{/** TODO fix links probably */}
							<a
								className="text-primary font-semibold hover:underline"
								href="/terms-of-service"
							>
								Terms of Service
							</a>{" "}
							and{" "}
							<Link
								className="text-primary font-semibold hover:underline"
								to="."
							>
								Privacy Policy
							</Link>
							.
						</p>

						<div className="mt-4 pt-5 border-t border-border/10 "></div>
						<div className="mt-4 text-center">
							<p className="text-sm text-muted-foreground">
								Don't have an account?{" "}
								<Link
									className="text-primary font-bold hover:underline hover:cursor-pointer"
									to="/register"
								>
									Sign up
								</Link>
							</p>
						</div>
					</header>
				</div>
			</section>
		</main>
	);
}
