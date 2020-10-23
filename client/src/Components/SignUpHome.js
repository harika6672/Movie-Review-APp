import React from "react";
import { Link } from "react-router-dom";
import GoogleSignUp from "./GoogleSignUp";
import "../css/SignUpStyle.css";
const SignUpHome = () => {
  return (
    <div className="col-md-4 offset-md-4 signUpStyle">
      <div className="sign-div">
        <GoogleSignUp />
      </div>

      <div className="sign-div" id="msign">
        <Link to="/sign-up" id="sign">
          Signup through email
        </Link>
      </div>

      <div className="account">
        <p id="account">Already have an Account?</p>
        <Link to="/ways/signin" className="acc-sign">
          SignIn
        </Link>
      </div>
    </div>
  );
};

export default SignUpHome;
