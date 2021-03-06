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
          <h2 className="title">๐์ฌ์ดํธ ์ฃผ์</h2>
          <p
            className="content"
            style={{
              textAlign: "center",
            }}
          >
            <a href="https://matching-mate.com" target={"_blank"} rel="noreferrer">
              ๋ฐ๋ก๊ฐ๊ธฐ
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
              ์ฃผ์ ๊ธฐ๋ฅ : ๊ณต๊ณ  ๋ฑ๋ก, ์กฐํ, ์ฑํ
            </p>
          </p>

          <h2 className="title">โจํ๋ก์ ํธ ๊ฐ์</h2>
          <p className="content">ํผ์์๋ ์ด๋ํ๊ธฐ ์ซ์๋ถ๋ค, ํน์ ํผ์๋ ํ ์ ์๋ ์ด๋์ ํ๊ณ ์ถ์ ๋ถ๋ค์ ์ํด ์ค์๊ฐ์ผ๋ก ์์น๋ฅผ ์กฐํํด ๊ทผ์ฒ์ ์ด๋๋ฉ์ดํธ๋ฅผ ์ฝ๊ฒ ์ฐพ์๋ณผ ์ ์๋ React, Spring๊ธฐ๋ฐ ์นํ์ด์ง์๋๋ค.</p>

          <h2 className="title">๐ง๊ธฐ์กด MatchingMate ํ๋ก์ ํธ์ ๋ค๋ฅธ์ ์?</h2>
          <p className="content">
            ๊ธฐ์กด MatchingMateํ๋ก์ ํธ๊ฐ repository์ ์กด์ฌํ์ง๋ง, ์๊ฐ์ ์ซ๊ธฐ๋ฉด์ ๋ง๋ค๊ณ  ์ฌ๋ฌ ํ์ด์ง๋ฅผ ๊ตฌํํ๋ ค๋ค๋ณด๋ ์์ฑ๋๊ฐ ๋จ์ด์ง์ ์ด ์์ฌ์ ํ๋ก์ ํธ ๋ฐํ๊ฐ ๋๋ ํ ๋ฐฑ์๋๋ ๊ธฐ์กด์๊ฒ์ ์ฌ์ฉํ๋, ํ์ํ๋ค๋ฉด ๋ค์ ๊ตฌํํด๋๊ฐ๋ฉฐ ํ์ํ๊ฑฐ๋ ํ์์๋
            ๋ถ๋ถ์ ์ฒจ์ญ์ ํตํด ์ข ๋ ์์ฑ๋๋ฅผ ๋์ฌ๋๊ฐ์ต๋๋ค.
          </p>

          <h2 className="title">๐ง์ฌ์ฉ API ๋ฐ ๋ผ์ด๋ธ๋ฌ๋ฆฌ</h2>
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
