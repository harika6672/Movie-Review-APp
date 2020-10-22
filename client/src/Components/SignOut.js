import React from "react";

import { GoogleLogout } from "react-google-login";

const Signout = () => {
  const onSuccess = () => {
    alert("Logout done!!");
  };
  return (
    <GoogleLogout
      clientId="575623627823-hg2eq8d439s6uec1891hclbjrt39g7nb.apps.googleusercontent.com"
      buttonText="LogOut"
      onLogoutSuccess={onSuccess}
    />
  );
};

export default Signout;
