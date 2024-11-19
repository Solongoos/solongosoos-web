import { sampleImg } from "@/assets/img";
import Button from "../button/Button";
import { useNavigate } from "react-router-dom";

type TProps = {
	handleToggle: () => void;
};

export default function Card({ handleToggle }: TProps) {
	const navigate = useNavigate();

	return (
		<li className="flex flex-col gap-4  w-[420px]">
			<div className="h-[420px] border border-gray-100 border-solid rounded-lg bg-gray-50">
				<img src={sampleImg} className="w-60 h-full mx-auto bg-gray-300" />
			</div>

			<div className="flex justify-between">
				<div className="text-base font-semibold">
					<p>기본</p>
					<p>9,900원</p>
				</div>

				<div className="flex gap-3">
					<Button mode="outline" className="hover:border-cyan-500 hover:text-cyan-500" onClick={handleToggle}>
						샘플보기
					</Button>
					<Button className="hover:opacity-90" onClick={() => navigate("create")}>
						제작하기
					</Button>
				</div>
			</div>
		</li>
	);
}
