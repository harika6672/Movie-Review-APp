import React from "react";
import axios from "axios";
import { GoogleLogin } from "react-google-login";
import { useHistory } from "react-router";
const GoogleSignIn = (props) => {
  const history=useHistory();
  const responseGoogle = (response) => {
    console.log(response.tokenId);
    const data = {
      tokenId: response.tokenId,
    };
    axios.post(/signin/googlelogin", data).then((res) => {
      console.log(res);
      localStorage.setItem("user_stored", res.data.user.name);
      localStorage.setItem("access", res.data.user.role);
      if(props.data){
      history.push(`/movie/:${props.data}`);
      window.location.reload();
  }
      else
      history.push("/")
    });
  };

  return (
    <GoogleLogin
      clientId="575623627823-hg2eq8d439s6uec1891hclbjrt39g7nb.apps.googleusercontent.com"
      buttonText="Signin through Google"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={"single_host_origin"}
    />
  );
};

export default GoogleSignIn;
