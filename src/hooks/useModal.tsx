import { useState } from "react"

export default function useModal(): [boolean, () => void] {
	const [isOpen, setIsOpen] = useState(false);

	const handleToggle = () => {
		setIsOpen((prev) => !prev);
	};

	return [isOpen, handleToggle];
}
