import { useState } from "react";
import Header from "../components/Header/Header";
import MonthsList from "../components/MonthList/MonthsList";
import MyCredit from "../components/MyCredit/MyCredit";
import SponsorshipList from "../components/SponsorshipList/SponsorshipList";
import useScrollTop from "../hooks/useScrollTop";
import SponsorshipModal from "../components/SponsorshipList/SponsorshipModal";
import ModalWrap from "../components/Modal/ModalWrap";
import VoteModal from "../components/MonthList/components/VoteModal";

function ListPage() {
  const [modalContents, setModalContents] = useState(); // 1,2,3,4
  const [isModal, setIsModal] = useState(false);
  //opacity로 modal 애니메이션주기
  const [modalOpacity, setModalOpacity] = useState(100);
  //데이터 상태관리
  const [sponsorData, setSponsorData] = useState();
  const [voteData, setVoteData] = useState();
  useScrollTop();

  //후원 모달 팝업 띄우기
  const handleSponsorModal = (data) => {
    setIsModal(true);
    setSponsorData(data);
    setModalContents(1);
    setTimeout(() => {
      setModalOpacity(100);
    }, 0);
  };

  //투표 모달 팝업 띄우기
  const handleVoteModal = (data) => {
    setIsModal(true);
    setVoteData(data);
    setModalContents(2);
    setTimeout(() => {
      setModalOpacity(100);
    }, 0);
  };

  //모달 팝업 X버튼 클릭시 닫기
  const handleDeleteModal = () => {
    setModalOpacity(0);
    setTimeout(() => {
      setIsModal(false);
      setSponsorData();
      setVoteData();
    }, 200);
  };

  //1번 후원하기, 2번 투표하기, 3번 크레딧 부족, 4번 크레딧 충전
  function ModalContents({ modalContents }) {
    switch (modalContents) {
      case 1: //후원하기
        return <SponsorshipModal data={sponsorData} />;
      case 2: //투표하기
        return <VoteModal />;
      default:
        break;
    }
  }

  return (
    <div>
      <Header />
      <MyCredit />
      <SponsorshipList handleSponsorModal={handleSponsorModal} />
      {isModal && (
        <ModalWrap
          style={{ opacity: `${modalOpacity}%` }}
          handleDeleteModal={handleDeleteModal}
        >
          <ModalContents modalContents={modalContents} />
        </ModalWrap>
      )}
      <MonthsList handleVoteModal={handleVoteModal} />
    </div>
  );
}

export default ListPage;
