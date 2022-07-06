import "./bodySkills.scss";
import HTMLIcon from "../img/body-HTML.png";
import ReactIcon from "../img/body-react.png";
import BodyIcon from "../img/body-typescript.png";
import SassIcon from "../img/body-sass.png";
import WebpackIcon from "../img/body-webpack.png";
import JavaIcon from "../img/body-java.png";
import SpringIcon from "../img/body-spring.png";
import DBIcon from "../img/body-DB.png";
import AWSIcon from "../img/body-aws.png";
import GitIcon from "../img/body-git.png";
import GitHubIcon from "../img/header-github.png";

const BodySkills: React.FC = () => {
  return (
    <>
      <div className="body-skill">
        <h1 className="title">Skills</h1>
        <div className="frontend item">
          <h4 className="title">Frontend</h4>
          <div className="skill">
            <img src={HTMLIcon} alt="icon-html" className="html icon" />
            <h4>HTML,CSS,JS</h4>
          </div>
          <div className="skill">
            <img src={ReactIcon} alt="icon-react" className="react icon" />
            <h4>React</h4>
          </div>
          <div className="skill">
            <img src={BodyIcon} alt="icon-typescript" className="typescript icon" />
            <h4>TypeScript</h4>
          </div>
          <div className="skill">
            <img src={SassIcon} alt="icon-sass" className="sass icon" />
            <h4>Sass</h4>
          </div>
          <div className="skill">
            <img src={WebpackIcon} alt="icon-webpack" className="webpack icon" />
            <h4>Webpack</h4>
          </div>
        </div>
        <div className="backend item">
          <h4 className="title">Backend</h4>
          <div className="skill">
            <img src={JavaIcon} alt="icon-java" className="java icon" />
            <h4>Java</h4>
          </div>

          <div className="skill">
            <img src={SpringIcon} alt="icon-spring" className="spring icon" />
            <h4>Spring</h4>
          </div>
          <div className="skill">
            <img src={DBIcon} alt="icon-db" className="DB icon" />
            <h4>MySQL</h4>
          </div>
        </div>
        <div className="deploy item">
          <h4 className="title">Deployment</h4>
          <div className="skill">
            <img src={AWSIcon} alt="icon-aws" className="aws icon" />
            <h4>AmazonWebService</h4>
          </div>
        </div>
        <div className="version-control item">
          <h4 className="title">Version Control</h4>
          <div className="skill">
            <img src={GitIcon} alt="icon-git" className="git icon" />
            <h4>Git</h4>
          </div>
          <div className="skill">
            <img src={GitHubIcon} alt="icon-github" className="github icon" />
            <h4>GitHub</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default BodySkills;
