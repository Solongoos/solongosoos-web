import Portal from "@/common/other/Portal";
import useModalCloseOutside from "@/hooks/useModalCloseOutside";

import useModalScrollPrevent from "@/hooks/useModalScrollPrevent";

import { useRef } from "react";

type TProps = {
	isOpen: boolean;
	handleToggle: () => void;
};

export default function SampleModal({ isOpen, handleToggle }: TProps) {
	const ref = useRef<HTMLDivElement>(null);

	useModalCloseOutside(ref, () => handleToggle());
	useModalScrollPrevent(isOpen);

	return (
		<Portal>
			<div
				className={`absolute bottom-0 left-1/2 flex flex-col items-center h-full w-full overflow-auto bg-black transform -translate-x-1/2 bg-opacity-50 pt-[100px]`}
			>
				<div ref={ref} className="w-[380px] h-[600px] rounded bg-white">
					샘플 청첩장
				</div>
			</div>
		</Portal>
	);
}
