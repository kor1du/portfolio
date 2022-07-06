import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "./bodyProjectModal.scss";

const BodyProjectModal: React.FC = () => {
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
          <h2 className="title">🚀사이트 주소</h2>
          <p
            className="content"
            style={{
              textAlign: "center",
            }}
          >
            <a href="https://matching-mate.com" target={"_blank"} rel="noreferrer">
              바로가기
            </a>
            <p
              style={{
                fontSize: "1.5rem",
              }}
            >
              Test ID : 1, 2
            </p>
            <p
              style={{
                fontSize: "1.5rem",
              }}
            >
              Test PW : 1, 2
            </p>

            <p
              style={{
                fontSize: "1.5rem",
              }}
            >
              주요 기능 : 공고 등록, 조회, 채팅
            </p>
          </p>

          <h2 className="title">✨프로젝트 개요</h2>
          <p className="content">혼자서는 운동하기 싫은분들, 혹은 혼자는 할수 없는 운동을 하고싶은 분들을 위해 실시간으로 위치를 조회해 근처의 운동메이트를 쉽게 찾아볼 수 있는 React, Spring기반 웹페이지입니다.</p>

          <h2 className="title">🧐기존 MatchingMate 프로젝트와 다른점은?</h2>
          <p className="content">
            기존 MatchingMate프로젝트가 repository에 존재하지만, 시간에 쫓기면서 만들고 여러 페이지를 구현하려다보니 완성도가 떨어진점이 아쉬워 프로젝트 발표가 끝난 후 백엔드는 기존의것을 사용하되, 필요하다면 다시 구현해나가며 필요하거나 필요없는
            부분은 첨삭을 통해 좀 더 완성도를 높여나갔습니다.
          </p>

          <h2 className="title">🔧사용 API 및 라이브러리</h2>
          <p
            className="content"
            style={{
              marginBottom: 0,
            }}
          >
            <p>Front-End : React, Typescript, Redux, Axios, WebPack, SockJS, StopmJS, Google API, KaKaoMap API, ...etc</p>
            <p>Back-End : Spring, JWT, ...etc </p>
            <p>DB: My SQL</p>
            <p>Dev Tools : Visual Studio Code, GitHub, Intelli J, ...etc</p>
            <p
              style={{
                marginBottom: 0,
              }}
            >
              Deployment : AWS
            </p>
          </p>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default BodyProjectModal;
