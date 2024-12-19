import { ArrowDown, ArrowUp } from "@/assets/svg";
import useModal from "@/hooks/useModal";

type TProps = {
	title: string;
	children: React.ReactNode;
};

export default function AccordionBox({ title, children }: TProps) {
	const [isOpen, handleToggle] = useModal();

	return (
		<div>
			<button
				onClick={handleToggle}
				className="flex justify-between items-center gap-4 px-5 py-4  font-semibold  bg-white  border border-gray-200 w-full"
			>
				<p>{title}</p>

				{isOpen ? <ArrowUp /> : <ArrowDown />}
			</button>

			{isOpen && <div className="border border-gray-200 border-t-0 bg-white p-5">{children}</div>}
		</div>
	);
}
