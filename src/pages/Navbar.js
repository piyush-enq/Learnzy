import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img
          className="microsoftteams-image-1-icon"
          alt=""
          src="/microsoftteamsimage-1@2x.png"
        />
        <div className="learnzy1">Learnzy</div>
      </div>
      <div className="navigations">
        <div className="about">
          <a className="about1">About</a>
        </div>
        <div className="why-us">
          <b className="">Why Us</b>
        </div>
        <div className="contact">
          <div className="contact1">{`Contact `}</div>
        </div>
      </div>
      <div className="loinsignup">
        <button className="student-loginsignup">
          <button className="student-loginsignup-child" />
          <a className="start-learning">
            
          <Link
              to="/StudentLogin"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Start Learning
            </Link>
            
            
            </a>
        </button>
        <button className="tutor-loginsignup">
          <button className="tutor-loginsignup-child" />
          <a className="start-learning">
            <Link
              to="/TutorLogin"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Start Teaching
            </Link>
          </a>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
