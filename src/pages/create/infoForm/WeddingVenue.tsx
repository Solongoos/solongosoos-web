import Input from "@/common/other/Input";

export default function WeddingVenue() {
	return (
		<>
			<div className="flex content-center items-center text-sm gap-2 mb-4">
				<p className="mr-4 w-[65px]">예식작명</p>
				<Input placeholder="예식장명을 입력해주세요" />
			</div>

			<div className="flex content-center items-center text-sm gap-2 mb-4">
				<p className="mr-4 w-[65px]">층과 홀</p>
				<Input placeholder="층과 홀 이름을 입력해주세요" />
			</div>

			<div className="flex content-center items-center text-sm gap-2 mb-4">
				<p className="mr-4 w-[65px]">주소</p>
				<Input placeholder="주소를 입력해주세요" />
			</div>
		</>
	);
}
