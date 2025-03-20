import Input from "@/common/other/Input";

export default function ContactNumber() {
	return (
		<>
			<div className="flex content-center items-center text-sm gap-2 mb-4">
				<p className="mr-4 w-[90px]">신랑</p>
				<Input placeholder="성함" width="m" />
				<Input placeholder="전화번호" width="s" />
			</div>

			<div className="flex content-center items-center text-sm gap-2 mb-4">
				<p className="mr-4 w-[90px]">신랑 아버지</p>
				<Input placeholder="성함" width="m" />
				<Input placeholder="전화번호" width="s" />
			</div>

			<div className="flex content-center items-center text-sm gap-2 mb-4">
				<p className="mr-4 w-[90px]">신랑 어머니</p>
				<Input placeholder="성함" width="m" />
				<Input placeholder="전화번호" width="s" />
			</div>

			<hr className="my-6" />

			<div className="flex content-center items-center text-sm gap-2 mb-4">
				<p className="mr-4 w-[90px]">신부</p>
				<Input placeholder="성함" width="m" />
				<Input placeholder="전화번호" width="s" />
			</div>

			<div className="flex content-center items-center text-sm gap-2 mb-4">
				<p className="mr-4 w-[90px]">신부 아버지</p>
				<Input placeholder="성함" width="m" />
				<Input placeholder="전화번호" width="s" />
			</div>

			<div className="flex content-center items-center text-sm gap-2 mb-4">
				<p className="mr-4 w-[90px]">신부 어머니</p>
				<Input placeholder="성함" width="m" />
				<Input placeholder="전화번호" width="s" />
			</div>
		</>
	);
}
