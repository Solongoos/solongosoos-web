import { CheckWhite } from "@/assets/svg";
import { ComponentProps } from "react";

type TProps = {
	checked: boolean;
	text?: string;
};

export default function CheckBox({ className = "", text, checked, ...props }: ComponentProps<"input"> & TProps) {
	return (
		<label className={`flex items-center space-x-2`}>
			<div
				className={`w-[16px] h-[16px] flex justify-center items-center border border-gray-500 rounded ${checked && "bg-gray-500"} `}
			>
				{checked && <CheckWhite width="12px" height="12px" />}
			</div>

			<span className={`text-sm text-gray-500`}>{text}</span>

			<input type="checkbox" {...props} hidden />
		</label>
	);
}
