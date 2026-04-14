import { Eye, EyeOff } from "lucide-react";
import react, { type InputHTMLAttributes, type ReactNode } from "react";
import FormField from "./FormField";

type PasswordFieldProps = {
	id: string;
	label: string;
	placeholder?: string;
	labelRight?: ReactNode;
	error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export default function PasswordField({
	id,
	label,
	error,
	placeholder = "••••••••",
	labelRight,
	...inputProps
}: PasswordFieldProps) {
	const [showPassword, setShowPassword] = react.useState(false);

	return (
		<FormField
			id={id}
			label={label}
			error={error}
			labelRight={labelRight}
			type={showPassword ? "text" : "password"}
			placeholder={placeholder}
			rightSlot={
				<button
					type="button"
					onClick={() => setShowPassword((prev) => !prev)}
					aria-label={showPassword ? "Hide Password" : "Show Password"}
					className="text-muted-foreground transition-colors hover:cursor-pointer hover:text-primary"
				>
					{showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
				</button>
			}
			{...inputProps}
		/>
	);
}
