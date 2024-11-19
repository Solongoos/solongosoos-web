type TProps = {
	children: React.ReactNode;
};

export default function Title({ children }: TProps) {
	return <h1 className="text-lg font-bold mt-8">{children}</h1>;
}
