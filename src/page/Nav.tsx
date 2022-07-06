import { Button } from "react-bootstrap";
import "./nav.scss";
import { FaBars } from "react-icons/fa";
import { url } from "inspector";

const Nav: React.FC = () => {
  return (
    <div className="nav">
      <div className="logo">
        <h1>Portfolio</h1>
        <Button
          onClick={(e) => {
            e.preventDefault();
            const target = document.querySelector(".nav ul");
            target?.classList.toggle("active");
          }}
        >
          <FaBars></FaBars>
        </Button>
      </div>
      <ul>
        <li>
          <a href="#head-title">
            <h3>About me</h3>
          </a>
        </li>
        <li>
          <a href="#body-title">
            <h3>Skills</h3>
          </a>
        </li>
        <li>
          <a href="#body-projects">
            <h3>Projects</h3>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
