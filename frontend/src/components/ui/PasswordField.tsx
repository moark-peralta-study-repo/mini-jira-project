import { Eye, EyeOff } from "lucide-react";
import react, { type ReactNode } from "react";
import FormField from "./FormField";

type PasswordFieldProps = {
	id: string;
	label: string;
	placeholder?: string;
	labelRight?: ReactNode;
};

export default function PasswordField({
	id,
	label,
	placeholder = "••••••••",
	labelRight,
}: PasswordFieldProps) {
	const [showPassword, setShowPassword] = react.useState(false);

	return (
		<FormField
			id={id}
			label={label}
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
		/>
	);
}
