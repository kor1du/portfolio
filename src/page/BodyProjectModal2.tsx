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
          <h2 className="title">πκΉνλΈ μ£Όμ</h2>
          <p
            className="content"
            style={{
              textAlign: "center",
            }}
          >
            <a href="https://github.com/kor1du/matchingMate" target={"_blank"} rel="noreferrer">
              λ°λ‘κ°κΈ°
            </a>
          </p>

          <h2 className="title">β¨νλ‘μ νΈ κ°μ</h2>
          <p className="content">κΈμ€κ³΅κ³Όλνκ΅ 4νλ 1νκΈ°μ ννλ‘μ νΈμ λ°νμ£Όμ μμ΅λλ€. μμΉμ‘°νλ₯Ό μ΄μ©ν μ΄λλ©μ΄νΈ κ΅¬μΈμ λͺ©μ μΌλ‘ν μ¬μ΄νΈμμ΅λλ€.</p>

          <h2 className="title">π¨βπ»λ§‘μ μ­ν </h2>
          <p className="content">
            κΈ°μ΄ HTML,CSS,JSμ 90%μ λλ₯Ό λλ§‘μ νμμΌλ©° λλ¨Έμ§ νμμ λ°±μλλ₯Ό μ£Όλ ₯μΌλ‘ κ°λ°νμμ΅λλ€. λ°±μλ κΈ°λ₯μ΄ μμ±λ λ€μλΆν°λ λ‘κ·ΈμΈ, νμκ°μ, κ΄λ¦¬μνμ΄μ§, μ±ν νμ΄μ§λ±μ νμ΄μ§λ₯Ό λ§‘μ κΈ°λ₯ κ΅¬ν λ° HTML, CSSμμμ νμμ΅λλ€. λν
            ννμ΄ λ°±μλμ DBμμ μμ μμλ μ’μ’ νμμ΅λλ€.
          </p>

          <h2 className="title">π¬μν΅λ°©μ</h2>
          <p className="content">μ£Όλ‘ μΉ΄μΉ΄μ€ν‘μ μ΄μ©νμμΌλ©° κ°μ νκ΅μλ λ§νΌ μ€ν°λλ£Έμ λΉλ € μμ λ° μν΅νλμΌμ΄ λ§μμ΅λλ€. μ§λ νκΈ°μλ Slackμ μ¬μ©νλ κ΄κ³λ‘ Slackμ μ¬μ©νλ € νμμ§λ§, μ€νλΌμΈμΌλ‘ λ§λλ μΌμ΄ μ¦μ μ¬μ©νμ§ μμμ΅λλ€.</p>

          <h2 className="title">πνλ‘μ νΈμ±κ³Ό</h2>
          <p className="content">
            λΆμ‘±νλ λ¦¬μ‘νΈμ λν μ§μ λ° μ§μ  ν΄λ³΄λ©΄μ λ¦¬μ‘νΈμ μνκ΄λ¦¬, λΌμ΄λΈλ¬λ¦¬ λ± κ°μΈμ μΈ μ±μ₯μ λ§μ λμμ΄ λλ€κ³  μκ°ν©λλ€. νΉν λ°±μλμ μ°λνλ κ³Όμ μμ μλΉν λ§μ μνμ°©μ€κ° μμκ³ , μ΄ μνμ°©μ€λ₯Ό ν΄κ²°ν΄κ°λ©΄μ νμμμ νμκ³Όμ
            μν΅μ΄ μΌλ§λ μ€μνμ§ μκ²λλ κ³κΈ°κ° λμμ΅λλ€.
          </p>

          <h2 className="title">π·νλ‘μ νΈ μ€νΈμ»·</h2>
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
