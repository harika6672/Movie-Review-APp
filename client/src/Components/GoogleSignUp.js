import React,{useState} from "react";
import axios from "axios";
import { useHistory } from "react-router";
import { GoogleLogin } from "react-google-login";
const GoogleSignUp = () => {
  const [alertdisplay, setAlert]=useState(false)
  const history=useHistory();
  const responseGoogle = (response) => {
    console.log(response.tokenId);
    const data = {
      tokenId: response.tokenId,
    };
    axios
      .post("http://localhost:8000/signup/googlelogin", data)
      .then((res) => {
        console.log(res);
        if(res.data.status==="success"){
          // alert("Yayy..You created the account");
          setAlert(true);
          setTimeout(()=>history.push("/ways/signin"), 3000)
        }
      });
  };

  return (
    <>
     {
      alertdisplay?
    <div class="alert alert-primary" role="alert" >
  Yayy..You created the account!!
</div>:""}
    <GoogleLogin
      clientId="575623627823-hg2eq8d439s6uec1891hclbjrt39g7nb.apps.googleusercontent.com"
      buttonText="SignUp through Google"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={"single_host_origin"}
    />
    </>
   

  );
};

export default GoogleSignUp;
