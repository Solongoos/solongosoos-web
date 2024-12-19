import Input from "@/common/other/Input";
import AccordionBox from "./AccordionBox";

export default function Create() {
	return (
		<div className="flex justify-center gap-4 pt-4 bg-gray-50">
			<section className="w-[390px] h-[1000px] border border-gray-200 rounded-lg bg-white">미리보기</section>

			<section className="flex flex-col w-[580px] h-[2500px] rounded-sm bg-gray-50 gap-4">
				{PERSON_INFO.map((person) => (
					<AccordionBox title="신랑측 정보">
						<div>
							<div className="flex content-center items-center text-sm gap-2 mb-4">
								<p className="mr-4">아버님</p>
								<Input width="s" placeholder="성" />
								<Input width="s" placeholder="이름" />
							</div>

							<div className="flex content-center items-center text-sm gap-2 mb-4">
								<p className="mr-4">어머님</p>
								<Input width="s" placeholder="성" />
								<Input width="s" placeholder="이름" />
							</div>

							<div className="flex content-center items-center text-sm gap-2">
								<p className="mr-4">{person}</p>
								<Input width="s" placeholder="성" />
								<Input width="s" placeholder="이름" />
							</div>
						</div>
					</AccordionBox>
				))}

				{/* <AccordionBox />
				<AccordionBox />
				<AccordionBox /> */}
			</section>
		</div>
	);
}

const PERSON_INFO = ["신랑님", "신부님"];
