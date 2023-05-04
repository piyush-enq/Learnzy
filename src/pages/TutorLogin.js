import { Link } from "react-router-dom";
import "./Login.css";

const TutorLoginPage = () => {
  return (
    <div className="vector-parent">
      <img className="frame-child" alt="" src="/rectangle-88.svg" />
      <img
        className="microsoftteams-image-2-1"
        alt=""
        src="/microsoftteamsimage-2-1@2x.png"
      />
      <b className="sign-in">Sign In
      </b>
      <div className="as-tutor">As Tutor</div>
      <div className="input">
        <input className="input1" type="text" />
        <div className="icon-greencheck">
          <input className="icon-greencheck-child" type="text" />
        </div>
        <div className="email">Email</div>
      </div>
      <button className="button">
        <div className="button-child" />
        <div className="log-in">
        <Link
              to="/dash"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Sign In
            </Link>

        </div>
      </button>
 
      <img className="frame-item" alt="" src="" />
      <div className="dont-have-a">{`Don’t Have a Account ? `}</div>
      <button className="button1">
        <div className="button-child" />
        <div className="sign-up">
          
          <p className="sign-in-with">
            
          <Link
              to="/TutorSignup"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Sign Up
            </Link>
            </p>
        </div>
      </button>
      <div className="input2">
        <input className="input1" type="text" />
        <div className="icon-greencheck">
          <input className="icon-greencheck-child" type="text" />
        </div>
        <div className="password">Password</div>
      </div>
    </div>
  );
};

export default TutorLoginPage;
