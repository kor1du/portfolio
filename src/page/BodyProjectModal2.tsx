import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "./bodyProjectModal.scss";
import StillCut1 from "../img/body-result1.png";
import StillCut2 from "../img/body-result2.png";
import StillCut3 from "../img/body-result3.png";
import StillCut4 from "../img/body-result4.png";
import StillCut5 from "../img/body-result5.png";
import StillCut6 from "../img/body-result6.png";
import StillCut7 from "../img/body-result7.png";
import StillCut8 from "../img/body-result8.png";
import StillCut9 from "../img/body-result9.png";

const BodyProjectModal2: React.FC = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        ReadMe
      </Button>

      <Modal show={show} onHide={handleClose} centered={true} dialogClassName="body-project-modal-dialog" contentClassName="body-project-modal-content">
        <Modal.Body>
          <h2 className="title">🚀깃허브 주소</h2>
          <p
            className="content"
            style={{
              textAlign: "center",
            }}
          >
            <a href="https://github.com/kor1du/matchingMate" target={"_blank"} rel="noreferrer">
              바로가기
            </a>
          </p>

          <h2 className="title">✨프로젝트 개요</h2>
          <p className="content">금오공과대학교 4학년 1학기의 팀프로젝트의 발표주제였습니다. 위치조회를 이용한 운동메이트 구인을 목적으로한 사이트였습니다.</p>

          <h2 className="title">👨‍💻맡은 역할</h2>
          <p className="content">
            기초 HTML,CSS,JS의 90%정도를 도맡아 하였으며 나머지 팀원은 백엔드를 주력으로 개발하였습니다. 백엔드 기능이 완성된 다음부터는 로그인, 회원가입, 관리자페이지, 채팅 페이지등의 페이지를 맡아 기능 구현 및 HTML, CSS작업을 하였습니다. 또한
            틈틈이 백엔드와 DB작업 수정작업도 종종 하였습니다.
          </p>

          <h2 className="title">💬소통방식</h2>
          <p className="content">주로 카카오톡을 이용하였으며 같은 학교였던 만큼 스터디룸을 빌려 작업 및 소통하는일이 많았습니다. 지난 학기에는 Slack을 사용했던 관계로 Slack을 사용하려 하였지만, 오프라인으로 만나는 일이 잦아 사용하지 않았습니다.</p>

          <h2 className="title">😃프로젝트성과</h2>
          <p className="content">
            부족했던 리액트에 대한 지식 및 직접 해보면서 리액트의 상태관리, 라이브러리 등 개인적인 성장에 많은 도움이 됐다고 생각합니다. 특히 백엔드와 연동하는 과정에서 상당히 많은 시행착오가 있었고, 이 시행착오를 해결해가면서 협업에서 팀원과의
            소통이 얼마나 중요한지 알게되는 계기가 되었습니다.
          </p>

          <h2 className="title">📷프로젝트 스틸컷</h2>
          <p
            className="content"
            style={{
              marginBottom: 0,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={StillCut1} alt="" />
            <img src={StillCut2} alt="" />
            <img src={StillCut3} alt="" />
            <img src={StillCut4} alt="" />
            <img src={StillCut5} alt="" />
            <img src={StillCut6} alt="" />
            <img src={StillCut7} alt="" />
            <img src={StillCut8} alt="" />
            <img
              src={StillCut9}
              alt=""
              style={{
                marginBottom: 0,
              }}
            />
          </p>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default BodyProjectModal2;
