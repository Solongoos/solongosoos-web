import { useEffect } from "react";

export default function useModalScrollPrevent(isOpen: boolean) {
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "scroll";
		}

		return () => {
			document.body.style.overflow = "scroll";
		};
	}, [isOpen]);
}
