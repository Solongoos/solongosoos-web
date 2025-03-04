import { CheckWhite } from "@/assets/svg";
import { ComponentProps, useState } from "react";

type TProps = {
	label?: string;
};

export default function CheckBox({ className = "", label, ...props }: ComponentProps<"input"> & TProps) {
	const [isChecked, setIsChecked] = useState(false);

	const handleCheckChange = () => {
		setIsChecked((prev) => !prev);
	};

	return (
		<label className={`flex items-center space-x-2`}>
			<div
				className={`w-[16px] h-[16px] flex justify-center items-center border border-gray-500 rounded ${isChecked && "bg-gray-500"} `}
			>
				{isChecked && <CheckWhite width="12px" height="12px" />}
			</div>

			<span className={`text-sm text-gray-500`}>{label}</span>

			<input type="checkbox" {...props} onChange={handleCheckChange} hidden />
		</label>
	);
}
