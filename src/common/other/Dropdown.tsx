import { ArrowDown, ArrowUp } from "@/assets/svg";
import { useState } from "react";

type TProps = {
	option: string[];
	selectedOption: string;
	onSelect: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function Dropdown({ option, onSelect, selectedOption }: TProps) {
	const [isOpen, setIsOpen] = useState(false);

	const handleArrow = () => {
		setIsOpen((prev) => !prev);
	};

	return (
		<div className="flex flex-col">
			<button
				className={`w-[100px] h-[40px] border border-gray-300 rounded p-[12px] text-xs flex items-center gap-4`}
				onClick={handleArrow}
			>
				{isOpen ? <ArrowUp /> : <ArrowDown />}
				{selectedOption}
			</button>

			{isOpen &&
				option.map((item) => (
					<button
						className={`h-[40px] border border-gray-300 rounded p-[12px] text-xs hover:bg-gray-50`}
						name={item}
						onClick={(e) => {
							onSelect(e);
							handleArrow();
						}}
					>
						{item}
					</button>
				))}
		</div>
	);
}
