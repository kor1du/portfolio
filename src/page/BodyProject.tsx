import { Button, Carousel } from "react-bootstrap";
import "./bodyProject.scss";
import MatchingMate from "../img/body-screenshot.png";
import MatchingMate2 from "../img/body-result6.png";
import BodyProjectModal from "./BodyProjectModal";
import BodyProjectModal2 from "./BodyProjectModal2";

const BodyProject: React.FC = () => {
  return (
    <>
      <a id="body-projects"></a>
      <div className="body-project">
        <h1 className="title">Projects</h1>
        <Carousel indicators={false} pause={"hover"}>
          <Carousel.Item>
            <img src={MatchingMate} alt="img-matching-mate" />
            <Carousel.Caption>
              <h3>운동메이트 Remake</h3>
              <BodyProjectModal></BodyProjectModal>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={MatchingMate2} alt="img-matching-mate" />
            <Carousel.Caption>
              <h3>운동메이트</h3>
              <BodyProjectModal2></BodyProjectModal2>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};

export default BodyProject;
