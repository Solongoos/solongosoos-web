import Card from "@/common/card/Card";

import SampleModal from "./SampleModal";
import useModal from "@/hooks/useModal";
export default function Home() {
	const [isOpen, handleToggle] = useModal();

	return (
		<>
			<div className="bg-white">
				<ul className="pt-8 grid grid-cols-2 gap-8 place-items-center">
					<Card handleToggle={handleToggle} />
					<Card handleToggle={handleToggle} />
					<Card handleToggle={handleToggle} />
					<Card handleToggle={handleToggle} />
					<Card handleToggle={handleToggle} />
				</ul>
			</div>

			{isOpen && <SampleModal isOpen={isOpen} handleToggle={handleToggle} />}
		</>
	);
}
