import AccordionBox from "./AccordionBox";

import CoupleInfo from "./infoForm/CoupleInfo";
import WeddingDate from "./infoForm/WeddingDate";
import WeddingVenue from "./infoForm/WeddingVenue";
import ContactNumber from "./infoForm/ContactNumber";
import AccountNumber from "./infoForm/AccountNumber";
import InvitationMessage from "./infoForm/InvitationMessage";

export default function Create() {
	return (
		<div className="flex justify-center gap-4 pt-4 bg-gray-50">
			<section className="w-[390px] h-[1000px] border border-gray-200 rounded-lg bg-white">미리보기</section>

			<section className="flex flex-col w-[580px] h-[2500px] rounded-sm bg-gray-50 gap-4">
				{PERSON_INFO.map((person, idx) => (
					<AccordionBox title={idx === 0 ? "신랑측 정보" : "신부측 정보"} key={idx}>
						<CoupleInfo person={person} idx={idx} />
					</AccordionBox>
				))}

				<AccordionBox title="예식 일시">
					<WeddingDate />
				</AccordionBox>

				<AccordionBox title="예식 장소">
					<WeddingVenue />
				</AccordionBox>

				<AccordionBox title="연락처">
					<ContactNumber />
				</AccordionBox>

				{/* TODO: 계좌번호 UI 수정 */}
				<AccordionBox title="계좌번호">
					<AccountNumber />
				</AccordionBox>

				<AccordionBox title="모시는 글">
					<InvitationMessage />
				</AccordionBox>
			</section>
		</div>
	);
}

const PERSON_INFO = ["신랑님", "신부님"];
