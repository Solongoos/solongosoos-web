import { ChangeEventHandler, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./quill.custom.css";

import Input from "@/common/other/Input";

import { CloseIcon, UploadIcon } from "@/assets/svg";

export default function InvitationMessage() {
	const [text, setText] = useState("");
	const [imgInfo, setImgInfo] = useState({ name: "", url: "" });

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
		<>
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
		</>
	);
}

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
