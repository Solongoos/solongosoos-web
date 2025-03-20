import CheckBox from "@/common/checkBox/CheckBox";

export default function WeddingDate() {
	return (
		<>
			<div className="flex content-center items-center text-sm gap-2 mb-4">
				<p className="mr-4 w-[65px]">예식일</p>
				<input className={`h-[40px] border border-gray-300 rounded p-[12px] text-xs `} type="date" />
			</div>

			<div className="flex content-center items-center text-sm gap-2 mb-4">
				<p className="mr-4 w-[65px]">예식시간</p>
				<input className={`h-[40px] border border-gray-300 rounded p-[12px] text-xs `} type="time" />
			</div>

			<div className="flex text-sm gap-2 mb-4">
				<p className="mr-4 w-[65px]">표시</p>

				<div>
					<CheckBox label="D-Day" />
					<CheckBox label="달력" />
				</div>
			</div>
		</>
	);
}
