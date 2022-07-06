import { Card } from "react-bootstrap";
import "./head.scss";
import ProfileImg from "../img/header-profile.jpg";
import GitHubImg from "../img/header-github.png";

const Head: React.FC = () => {
  return (
    <>
      <a id="head-title"></a>
      <div className="header">
        <h1 className="title">About me</h1>
        <Card>
          <div className="front item">
            <div className="background"></div>
            <div className="header">
              <img src={ProfileImg} alt="profile-img" className="img-profile" />
            </div>
            <div className="body">
              <h3 className="name">이동욱</h3>
              <h6 className="job">Frontend Developer</h6>
            </div>
            <div className="footer">
              <h6 className="introduce">
                안녕하세요 더 빠른, 그리고 효율적인<br></br> 코드는 무엇일까 고민이 많은 <br></br>프론트엔드 개발자 이동욱입니다.
              </h6>
            </div>
          </div>
          <div className="back item">
            <div className="header">"Rome is not built in a day"</div>
            <div className="body">
              <h6>이름 : 이동욱</h6>
              <h6>생년월일 : 1996-03-12</h6>
              <h6>주소지 : 경기도 의정부시</h6>
              <h6>연락처 : 010-5041-2235</h6>
              <h6>이메일 : kor1du0312@gmail.com</h6>
              <h6>학력 : 금오공과대학교 컴퓨터소프트웨어공학과</h6>
            </div>
            <div className="footer">
              <a href="https://github.com/kor1du" target="_blank" rel="noreferrer">
                <img src={GitHubImg} alt="github-img" />
              </a>
            </div>
          </div>
          <a id="body-title"></a>
        </Card>
      </div>
    </>
  );
};

export default Head;
