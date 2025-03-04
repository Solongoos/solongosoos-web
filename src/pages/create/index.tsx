import Input from "@/common/other/Input";
import AccordionBox from "./AccordionBox";
import Dropdown from "@/common/other/Dropdown";
import { useState } from "react";

import CheckBox from "@/common/checkBox/CheckBox";

export default function Create() {
	const [selectedOption, setSelectedOption] = useState("");

	const handleSelect = (e: React.MouseEvent<HTMLButtonElement>) => {
		setSelectedOption(e.currentTarget.name);
	};

	return (
		<div className="flex justify-center gap-4 pt-4 bg-gray-50">
			<section className="w-[390px] h-[1000px] border border-gray-200 rounded-lg bg-white">미리보기</section>

			<section className="flex flex-col w-[580px] h-[2500px] rounded-sm bg-gray-50 gap-4">
				{PERSON_INFO.map((person, idx) => (
					<AccordionBox title={idx === 0 ? "신랑측 정보" : "신부측 정보"}>
						<div>
							<div className="flex text-sm gap-2 mb-4">
								<p className="mr-4 w-[65px]">아버님</p>
								<Input width="s" placeholder="성" />
								<Input width="s" placeholder="이름" />
								<CheckBox label="국화" />
							</div>

							<div className="flex text-sm gap-2 mb-4">
								<p className="mr-4  w-[65px]">어머님</p>
								<Input width="s" placeholder="성" />
								<Input width="s" placeholder="이름" />
								<CheckBox label="국화" />
							</div>

							<div className="flex text-sm gap-2 mb-4">
								<p className="mr-4  w-[65px]">{person}</p>
								<Input width="s" placeholder="성" />
								<Input width="s" placeholder="이름" />
							</div>

							<div className="flex text-sm gap-2 mb-4">
								<p className="mr-4  w-[65px]">관계</p>
								<Dropdown option={OPTION} onSelect={handleSelect} selectedOption={selectedOption} />
							</div>

							{idx === 1 && (
								<div className="flex text-sm gap-2 mb-4">
									<p className="mr-4  w-[65px]">신부측 먼저</p>

									<div>
										<CheckBox label="모든 항목 신부측 먼저 표시" />
									</div>
								</div>
							)}
						</div>
					</AccordionBox>
				))}

				<AccordionBox title="예식 일시">
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
				</AccordionBox>

				<AccordionBox title="예식 장소">
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
				</AccordionBox>

				<AccordionBox title="연락처">
					<div className="flex content-center items-center text-sm gap-2 mb-4">
						<p className="mr-4 w-[90px]">신랑</p>
						<Input placeholder="성함" width="m" />
						<Input placeholder="전화번호" width="s" />
					</div>

					<div className="flex content-center items-center text-sm gap-2 mb-4">
						<p className="mr-4 w-[90px]">신랑 아버지</p>
						<Input placeholder="성함" width="m" />
						<Input placeholder="전화번호" width="s" />
					</div>

					<div className="flex content-center items-center text-sm gap-2 mb-4">
						<p className="mr-4 w-[90px]">신랑 어머니</p>
						<Input placeholder="성함" width="m" />
						<Input placeholder="전화번호" width="s" />
					</div>

					<hr className="my-6" />

					<div className="flex content-center items-center text-sm gap-2 mb-4">
						<p className="mr-4 w-[90px]">신부</p>
						<Input placeholder="성함" width="m" />
						<Input placeholder="전화번호" width="s" />
					</div>

					<div className="flex content-center items-center text-sm gap-2 mb-4">
						<p className="mr-4 w-[90px]">신부 아버지</p>
						<Input placeholder="성함" width="m" />
						<Input placeholder="전화번호" width="s" />
					</div>

					<div className="flex content-center items-center text-sm gap-2 mb-4">
						<p className="mr-4 w-[90px]">신부 어머니</p>
						<Input placeholder="성함" width="m" />
						<Input placeholder="전화번호" width="s" />
					</div>
				</AccordionBox>
			</section>
		</div>
	);
}

const PERSON_INFO = ["신랑님", "신부님"];
const OPTION = ["첫째", "둘째", "셋째", "넷째", "막내", "외동"];
