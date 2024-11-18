import Card from "@/common/card/Card";
import Nav from "@/common/nav/Nav";
export default function Home() {
	return (
		<div className="bg-white">
			<Nav />
			
			<ul className="pt-8 grid grid-cols-2 gap-8 place-items-center">
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
			</ul>
		
		</div>
	);
}