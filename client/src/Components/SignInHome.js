import React from "react";
import { Link } from "react-router-dom";
import GoogleSignIn from "./GoogleSignIn";
import "../css/SignUpStyle.css";
const SignInHome = (props) => {
// console.log(props);
if(props.location.state!==undefined){
  var data={
    status:props.location.state.fromModal,
    id:props.location.state.id
}
}
else{
  data={}
}
  return (
    <div className="col-md-4 offset-md-4 signUpStyle">
      <div className="sign-div">
        <GoogleSignIn data={data.id} />
      </div>

      <div className="sign-div" id="msign">
        
        <Link to={{pathname:"/sign-in",data:`${data.status}`}} id="sign">
          Signin through email
        </Link>
      </div>

      <div className="account">
        <p id="account">Create an Account?</p>
        <Link to="/ways/signup" className="acc-sign">
          SignUp
        </Link>
      </div>
    </div>
  );
};

export default SignInHome;
