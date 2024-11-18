type TProps = {
    children: React.ReactNode;
	mode?: "default" | 'outline';
	className?: string;
};

export default function Button({ children, mode='default',className }: TProps) {


    const borderColor = mode === "outline" ? "border-gray-400" : "border-transparent";
    const txtColor = mode === "outline" ? "text-gray-400" : "text-white";
    const bgColor = mode==="outline" ?  "bg-white" :"bg-cyan-500";


	return (
		<button
			className={`w-22 h-10 whitespace-nowrap border border-solid px-4 leading-9 rounded-lg text-sm ${borderColor} ${txtColor} ${bgColor} ${className}`}
		>
			{children}
		</button>
	);
}