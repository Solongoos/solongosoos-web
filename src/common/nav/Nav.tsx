import { useState } from "react";
import Button from "../button/Button";

export default function Nav() {
	const [activeMenu, setActiveMenu] = useState(0);

	return (
		<nav className="flex items-center justify-between px-28 py-3 h-16 border-b  border-slate-200 sticky top-0 bg-white">
			<div className="flex items-center gap-8 ">
				<div className="flex text-lg font-bold">
					<div className="mr-2">🌈</div>
					<h2>Solongosoos</h2>
				</div>

				<ul className="flex items-center text-base font-semibold  text-black gap-1">
					{MENU_MAP.map((menu, idx) => (
						<li className={idx === activeMenu ? "px-2 py-5 text-cyan-500 font-bold" : "px-2 py-5"}>
							<button>{menu}</button>
						</li>
					))}
				</ul>
			</div>

			<Button>로그인</Button>
		</nav>
	);
}

const MENU_MAP = ["모바일 청첩장", "제작 내역", "문의"];