import { Link } from "react-router-dom";
import "./Login.css";

const TutorSignupPage = () => {return (
  <div className="vector-parent">
    <img className="frame-child-t" alt="" src="/rectangle-88.svg" />
    <img
      className="microsoftteams-image-2-11"
      alt=""
      src="/microsoftteamsimage-2-1@2x.png"
    />
    <b className="sign-in">SignUp</b>
    <div className="as-tutor">As Tutor</div>
    <div className="input">
      <input className="input1" type="text" />
      
      <div className="email">Name</div>
    </div>
    <button className="button-t">
      <div className="button-child-s" />
      <div className="log-in">
        <Link to="/dash" style={{ color: "inherit", textDecoration: "none" }}>
          Sign Up
        </Link>
      </div>
    </button>

    
    <div className="input2">
      <input className="inpute" type="text" />
      <div className="password">Email</div>
    </div>

    <div className="input3">
      <input className="inputp" type="password" />
      <div className="password">Password</div>
    </div>
    <div className="input4">
      <input className="inputcp" type="password" />
      <div className="password">Confirm Password</div>
    </div>
    <div className="input5">
      <input className="inputa" type="text" />
      
      <div className="password">Age</div>
    </div>
  </div>
);
};


export default TutorSignupPage;
