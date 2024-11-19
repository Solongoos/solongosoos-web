import AccordionBox from "./AccordionBox";

export default function Create() {
	return (
		<div className="flex justify-center gap-4 pt-4 bg-gray-50">
			<section className="w-[390px] h-[1000px] border border-gray-200 rounded-lg bg-white">미리보기</section>

			<section className="flex flex-col w-[580px] h-[2500px] rounded-sm bg-gray-50 gap-4">
				<AccordionBox />
				<AccordionBox />
				<AccordionBox />
				<AccordionBox />
			</section>
		</div>
	);
}
