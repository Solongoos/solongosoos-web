import { CloseIcon } from "@/assets/svg";
import Input from "@/common/other/Input";
import { useState } from "react";

export default function AccountNumber() {
	const [accountForm, setAccountForm] = useState([0, 1]);

	const handleAdd = () => {
		setAccountForm((prev) => [...prev, prev[prev.length - 1] + 1]);
	};

	const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
		const id = Number(e.currentTarget.id);

		const arr = [...accountForm];
		arr.splice(id, 1);

		setAccountForm(arr);
	};

	return (
		<>
			{accountForm.map((el, idx) => {
				return (
					<div key={el} className="flex flex-col">
						{idx !== 0 && idx !== 1 && (
							<button
								id={String(idx)}
								className="flex items-center justify-center w-[16px] h-[16px] ml-auto mb-4 border bg-gray-200 text-gray-400 text-sm rounded-sm"
								onClick={handleDelete}
							>
								<CloseIcon />
							</button>
						)}

						<div className="flex content-center items-center text-sm gap-2 mb-4">
							<p className="mr-4 w-[60px] whitespace-nowrap">계좌번호</p>
							<Input placeholder="은행" />
							<Input placeholder="계좌번호" />
						</div>

						<div className="flex content-center items-center text-sm gap-2 mb-6">
							<p className="mr-4 w-[60px] whitespace-nowrap">예금주</p>
							<Input placeholder="성함" />
						</div>

						{idx !== accountForm.length - 1 && <hr className="mb-6" />}
					</div>
				);
			})}

			<div className="flex justify-end">
				<button
					className="w-22 h-10 whitespace-nowrap px-4 leading-9 rounded-3xl text-sm  text-white  bg-cyan-500"
					onClick={handleAdd}
				>
					+ 계좌 추가
				</button>
			</div>
		</>
	);
}
