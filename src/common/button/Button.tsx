type TProps = {
    children: React.ReactNode;
    mode?: "default" |'outline';
};

export default function Button({ children, mode='default' }: TProps) {


    const borderColor = mode === "outline" ? "border-gray-600" : "border-transparent";
    const txtColor = mode === "outline" ? "text-gray-600" : "text-white";
    const bgColor = mode==="outline" ?  "bg-white" :"bg-cyan-500";


	return (
		<button
			className={`w-22 h-10 whitespace-nowrap border border-solid px-4 leading-9 rounded text-sm ${borderColor} ${txtColor} ${bgColor}`}
		>
			{children}
		</button>
	);
}