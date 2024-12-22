import Input from "@/common/other/Input";
import AccordionBox from "./AccordionBox";
import Dropdown from "@/common/other/Dropdown";
import { useState } from "react";

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
							<div className="flex content-center items-center text-sm gap-2 mb-4">
								<p className="mr-4 w-[50px]">아버님</p>
								<Input width="s" placeholder="성" />
								<Input width="s" placeholder="이름" />
							</div>

							<div className="flex content-center items-center text-sm gap-2 mb-4">
								<p className="mr-4  w-[50px]">어머님</p>
								<Input width="s" placeholder="성" />
								<Input width="s" placeholder="이름" />
							</div>

							<div className="flex content-center items-center text-sm gap-2 mb-4">
								<p className="mr-4  w-[50px]">{person}</p>
								<Input width="s" placeholder="성" />
								<Input width="s" placeholder="이름" />
							</div>

							<div className="flex content-center items-center text-sm gap-2 mb-4">
								<p className="mr-4  w-[50px]">관계</p>
								<Dropdown option={OPTION} onSelect={handleSelect} selectedOption={selectedOption}/>
							</div>
						</div>
					</AccordionBox>
				))}

			</section>
		</div>
	);
}

const PERSON_INFO = ["신랑님", "신부님"];
const OPTION = ["첫째", "둘째", "셋째", "넷째", "막내", "외동"];
