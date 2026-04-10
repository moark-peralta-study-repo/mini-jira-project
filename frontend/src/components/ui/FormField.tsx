import type { InputHTMLAttributes, ReactNode } from "react";
import { cn } from "#/lib/utils";
import { Input } from "./input";

type TextFieldProps = {
	id: string;
	label: string;
	rightSlot?: ReactNode;
	wrapperClassName?: string;
	labelClassName?: string;
	inputClassName?: string;
	labelRight?: ReactNode;
} & InputHTMLAttributes<HTMLInputElement>;

const baseInputClassName =
	"w-full px-4 py-3.5 bg-blue-grey-100 border-0 rounded-sm text-foreground placeholder:text-muted-foreground transition-all focus:ring-2 focus:ring-primary/40";

export default function FormField({
	id,
	label,
	rightSlot,
	wrapperClassName,
	labelClassName,
	inputClassName,
	labelRight,
	className,
	...inputProps
}: TextFieldProps) {
	return (
		<div className={cn("space-y-1.5", wrapperClassName)}>
			<div className="flex items-center justify-between px-1">
				<label
					className={cn(
						"text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1",
						labelClassName,
					)}
					htmlFor={id}
				>
					{label}
				</label>

				{labelRight}
			</div>

			<div className="relative">
				<Input
					type="text"
					className={cn(
						baseInputClassName,
						rightSlot && "pr-12",
						inputClassName,
						className,
					)}
					id={id}
					{...inputProps}
				/>
				{rightSlot ? (
					<div className="absolute inset-y-0 right-4 flex items-center">
						{rightSlot}
					</div>
				) : null}
			</div>
		</div>
	);
}
