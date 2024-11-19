import { ArrowDown, ArrowUp } from "@/assets/svg";
import useModal from "@/hooks/useModal";

export default function AccordionBox() {
	const [isOpen, handleToggle] = useModal();

	return (
		<div>
			<button
				onClick={handleToggle}
				className="flex justify-between items-center gap-4 px-5 py-4  font-semibold  bg-white  border border-gray-200 w-full">
				<p>테마</p>

				{isOpen ? <ArrowUp /> : <ArrowDown />}
			</button>

			{isOpen && <div className="h-[300px] border border-gray-200 border-t-0 bg-white p-5">내용</div>}
		</div>
	);
}
