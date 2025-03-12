import Input from "@/common/other/Input";
import AccordionBox from "./AccordionBox";
import Dropdown from "@/common/other/Dropdown";
import { ChangeEventHandler, useState } from "react";

import CheckBox from "@/common/checkBox/CheckBox";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./quill.custom.css";

import { CloseIcon, UploadIcon } from "@/assets/svg";

export default function Create() {
	const [selectedOption, setSelectedOption] = useState("");
	const [accountForm, setAccountForm] = useState([0, 1]);

	const [text, setText] = useState("");
	const [imgInfo, setImgInfo] = useState({ name: "", url: "" });

	const handleSelect = (e: React.MouseEvent<HTMLButtonElement>) => {
		setSelectedOption(e.currentTarget.name);
	};

	const handleAdd = () => {
		setAccountForm((prev) => [...prev, prev[prev.length - 1] + 1]);
	};

	const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
		const id = Number(e.currentTarget.id);

		const arr = [...accountForm];
		arr.splice(id, 1);

		setAccountForm(arr);
	};

	const handleChangeFile: ChangeEventHandler<HTMLInputElement> = (e) => {
		const file = e.currentTarget.files?.[0];

		if (!file) {
			return;
		}

		const url = URL.createObjectURL(file);

		setImgInfo({ name: file.name, url });
	};

	const handleImgRemove = () => {
		setImgInfo({ name: "", url: "" });
	};

	return (
		<div className="flex justify-center gap-4 pt-4 bg-gray-50">
			<section className="w-[390px] h-[1000px] border border-gray-200 rounded-lg bg-white">미리보기</section>
			<section className="flex flex-col w-[580px] h-[2500px] rounded-sm bg-gray-50 gap-4">
				{PERSON_INFO.map((person, idx) => (
					<AccordionBox title={idx === 0 ? "신랑측 정보" : "신부측 정보"} key={idx}>
						<div>
							<div className="flex text-sm gap-2 mb-4">
								<p className="mr-4 w-[65px]">아버님</p>
								<Input width="s" placeholder="성" />
								<Input width="s" placeholder="이름" />
								<CheckBox label="국화" />
							</div>

							<div className="flex text-sm gap-2 mb-4">
								<p className="mr-4  w-[65px]">어머님</p>
								<Input width="s" placeholder="성" />
								<Input width="s" placeholder="이름" />
								<CheckBox label="국화" />
							</div>

							<div className="flex text-sm gap-2 mb-4">
								<p className="mr-4  w-[65px]">{person}</p>
								<Input width="s" placeholder="성" />
								<Input width="s" placeholder="이름" />
							</div>

							<div className="flex text-sm gap-2 mb-4">
								<p className="mr-4  w-[65px]">관계</p>
								<Dropdown option={OPTION} onSelect={handleSelect} selectedOption={selectedOption} />
							</div>

							{idx === 1 && (
								<div className="flex text-sm gap-2 mb-4">
									<p className="mr-4  w-[65px]">신부측 먼저</p>

									<div>
										<CheckBox label="모든 항목 신부측 먼저 표시" />
									</div>
								</div>
							)}
						</div>
					</AccordionBox>
				))}

				<AccordionBox title="예식 일시">
					<div className="flex content-center items-center text-sm gap-2 mb-4">
						<p className="mr-4 w-[65px]">예식일</p>
						<input className={`h-[40px] border border-gray-300 rounded p-[12px] text-xs `} type="date" />
					</div>

					<div className="flex content-center items-center text-sm gap-2 mb-4">
						<p className="mr-4 w-[65px]">예식시간</p>
						<input className={`h-[40px] border border-gray-300 rounded p-[12px] text-xs `} type="time" />
					</div>

					<div className="flex text-sm gap-2 mb-4">
						<p className="mr-4 w-[65px]">표시</p>

						<div>
							<CheckBox label="D-Day" />
							<CheckBox label="달력" />
						</div>
					</div>
				</AccordionBox>

				<AccordionBox title="예식 장소">
					<div className="flex content-center items-center text-sm gap-2 mb-4">
						<p className="mr-4 w-[65px]">예식작명</p>
						<Input placeholder="예식장명을 입력해주세요" />
					</div>

					<div className="flex content-center items-center text-sm gap-2 mb-4">
						<p className="mr-4 w-[65px]">층과 홀</p>
						<Input placeholder="층과 홀 이름을 입력해주세요" />
					</div>

					<div className="flex content-center items-center text-sm gap-2 mb-4">
						<p className="mr-4 w-[65px]">주소</p>
						<Input placeholder="주소를 입력해주세요" />
					</div>
				</AccordionBox>

				<AccordionBox title="연락처">
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
				</AccordionBox>

				{/* TODO: 계좌번호 UI 수정 */}
				<AccordionBox title="계좌번호">
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
				</AccordionBox>

				<AccordionBox title="모시는 글">
					<div className="flex content-center items-center text-sm gap-2 mb-4">
						<p className="mr-4 w-[65px]">제목</p>
						<Input placeholder="제목을 입력해주세요" />
					</div>

					<div className="flex content-center items-center text-sm gap-2 mb-4">
						<p className="mr-4 w-[65px]">내용</p>

						<ReactQuill
							theme="snow"
							modules={MODULES}
							formats={FORMATS}
							value={text}
							onChange={setText}
							placeholder="내용을 입력해주세요(최대 00자)"
						/>
					</div>

					<div className="flex text-sm  mb-4">
						<p className="mr-4 w-[65px]">사진</p>

						{imgInfo.url ? (
							<div className="flex items-end gap-4">
								<div className="flex items-center justify-center  border border-gray-200 w-[150px] h-[150px] bg-gray-100 rounded-sm">
									<img src={imgInfo.url} className="w-full h-full object-contain" />
								</div>

								<div className="flex gap-2">
									<span className="text-xs">{imgInfo.name}</span>

									<button
										className="flex items-center justify-center w-[16px] h-[16px] ml-auto  border bg-gray-200 text-gray-400 text-sm rounded-sm"
										onClick={handleImgRemove}
									>
										<CloseIcon />
									</button>
								</div>
							</div>
						) : (
							<>
								<label
									htmlFor="upload"
									className="w-[150px] h-[150px] border border-gray-200 rounded-sm flex justify-center items-center flex-col gap-2 cursor-pointer border-dashed bg-slate-50"
								>
									<UploadIcon />
									<span className="text-xs text-cyan-500">클릭하여 업로드</span>
								</label>

								<input
									type="file"
									accept="image/jpg, image/jpeg, image/png"
									id="upload"
									className="hidden"
									onChange={handleChangeFile}
								/>
							</>
						)}
					</div>
				</AccordionBox>
			</section>
		</div>
	);
}

const PERSON_INFO = ["신랑님", "신부님"];
const OPTION = ["첫째", "둘째", "셋째", "넷째", "막내", "외동"];

const FORMATS = ["bold", "italic", "underline", "align", "color"];
const MODULES = {
	toolbar: [
		[
			"bold",
			"italic",
			"underline",
			{ align: ["", "right", "center", "justify"] },
			{
				color: [
					"#F00",
					"#FFFF00",
					"#00F",
					"#008000",
					"#000",
					"#C0C0C0",
					"#FFF",
					"#abdee6",
					"#cbaacb",
					"#ffffb5",
					"#ffccb6",
					"#f3b0c3",
					"#c6dbda",
					"#fee1e8",
					"#fed7c3",
					"#f6eac2",
					"#ffc8a2",
					"#97c1a9",
					"#cce2cb",
					"#a2e1db",
				],
			},
		],
	],
};
