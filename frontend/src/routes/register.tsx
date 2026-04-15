import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import FormField from "#/components/ui/FormField";
import LeftAuthSection from "#/components/ui/LeftAuthSection";
import PasswordField from "#/components/ui/PasswordField";

export const Route = createFileRoute("/register")({
	component: RouteComponent,
});

type FormErrors = {
	fullname?: string;
	email?: string;
	password?: string;
	confirmPassword?: string;
	general?: string;
};

function RouteComponent() {
	const [fullname, setFullname] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [errors, setErrors] = useState<FormErrors>({});

	const navigate = useNavigate({ from: "/register" });

	async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
		e.preventDefault();

		const newErrors: FormErrors = {};

		if (!fullname.trim()) {
			newErrors.fullname = "Full name is required";
		}

		if (!email.trim()) {
			newErrors.email = "Email is required";
		}

		if (!password.trim()) {
			newErrors.password = "Password is required";
		}

		if (!confirmPassword.trim()) {
			newErrors.confirmPassword = "Please confirm your password";
		}

		if (
			password.trim() &&
			confirmPassword.trim() &&
			password !== confirmPassword
		) {
			newErrors.confirmPassword = "Passwords do not match";
		}

		if (Object.keys(newErrors).length > 0) {
			setErrors(newErrors);
			return;
		}

		setErrors({});

		try {
			const response = await fetch("http://localhost:8080/api/auth/register", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					name: fullname,
					email,
					password,
				}),
			});

			if (!response.ok) {
				const errorText = await response.text();
				setErrors({
					general: "Registration failed",
				});
				console.log("Registration failed:", errorText);
				return;
			}

			const data = await response.json();
			console.log("Registration success:", data);
			setFullname("");
			setEmail("");
			setPassword("");
			setConfirmPassword("");
			navigate({ to: "/login" });
		} catch (err) {
			setErrors({
				general: "Network error",
			});
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
							Start for Free
						</h1>

						<p className="text-muted-foreground mb-8">
							Build your digital atelier in seconds. No credit card required
						</p>

						<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
							<button
								className="flex items-center justify-center gap-3 py-3 px-4 bg-background border border-blue-grey-100 hover:cursor-pointer hover:bg-blue-grey-50 transition-all duration-200 group"
								type="button"
							>
								<span className="text-sm font-semibold text-muted-foreground group-hover:text-foreground/80">
									Sign up with Google
								</span>
							</button>

							<button
								className="flex items-center justify-center gap-3 py-3 px-4 bg-background border border-blue-grey-100 hover:cursor-pointer hover:bg-blue-grey-50 transition-all duration-200 group"
								type="button"
							>
								<span className="text-sm font-semibold text-muted-foreground group-hover:text-foreground/80">
									Sign up with Github
								</span>
							</button>
						</div>

						<div className="relative mb-8">
							<div className="absolute inset-0 flex items-center">
								<div className="w-full border-t border-border/20" />
							</div>
							<div className="relative flex justify-center text-xs uppercase tracking-widest">
								<span className="bg-blue-grey-50 px-4 text-muted-foreground/60 font-medium">
									Or continue with email
								</span>
							</div>
						</div>

						<form className="space-y-5" onSubmit={handleSubmit}>
							<FormField
								value={fullname}
								onChange={(e) => setFullname(e.target.value)}
								id="name"
								label="Full Name"
								type="text"
								placeholder="John Doe"
								error={errors.fullname}
							/>

							<FormField
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								id="email"
								label="Work Email"
								type="email"
								placeholder="j.doe@executive.com"
								error={errors.email}
							/>

							<PasswordField
								id="password"
								label="Password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								error={errors.password}
							/>

							<PasswordField
								id="confirm-password"
								label="Confirm Password"
								value={confirmPassword}
								onChange={(e) => setConfirmPassword(e.target.value)}
								error={errors.confirmPassword}
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
							<Link
								className="text-primary font-semibold hover:underline"
								to="."
							>
								Terms of Service
							</Link>{" "}
							and{" "}
							<Link
								className="text-primary font-semibold hover:underline"
								to="."
							>
								Privacy Policy
							</Link>
							.
						</p>

						<div className="mt-4 pt-5 border-t border-border/10 " />

						<div className="mt-4 text-center">
							<p className="text-sm text-muted-foreground">
								Already have an account?{" "}
								<Link
									className="text-primary font-bold hover:underline hover:cursor-pointer"
									to="/login"
								>
									Sign in
								</Link>
							</p>
						</div>
					</header>
				</div>
			</section>
		</main>
	);
}
