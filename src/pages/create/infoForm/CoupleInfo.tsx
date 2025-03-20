import CheckBox from "@/common/checkBox/CheckBox";
import Dropdown from "@/common/other/Dropdown";
import Input from "@/common/other/Input";
import { useState } from "react";

type TProps = {
	person: string;
	idx: number;
};

export default function CoupleInfo({ person, idx }: TProps) {
	const [selectedOption, setSelectedOption] = useState("");

	const handleSelect = (e: React.MouseEvent<HTMLButtonElement>) => {
		setSelectedOption(e.currentTarget.name);
	};

	return (
		<>
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
		</>
	);
}

const OPTION = ["첫째", "둘째", "셋째", "넷째", "막내", "외동"];
