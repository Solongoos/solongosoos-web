type TProps = {
	width?: "xs" | "s" | "m" | "l";
	placeholder?: string;
	maxLength?: number;
};

const WIDTH_MAP: { [key: string]: string } = {
	xs: "w-[100px]",
	s: "w-[120px]",
	m: "w-[250px]",
	l: "w-full",
};

export default function Input({ width = "l", placeholder, maxLength }: TProps) {
	return (
		<input
			className={`h-[40px] border border-gray-300 rounded p-[12px] text-xs ${WIDTH_MAP[width]}`}
			placeholder={placeholder}
			maxLength={maxLength}
		/>
	);
}
