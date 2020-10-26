import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import "../css/form.css";
import { fetchAuthStatus, fetchUsers } from "../Actions/fetch";
import { getUsers } from "../Reducers/reducer";
import { useHistory } from "react-router";
const SignIn = (props) => {
  const [userObj, setUserObj] = useState({ email: " ", password: " " });
  const [alertdisplay, setAlert] = useState(false);
  const [alertdisplayf, setAlertf] = useState(false);
  // console.log(props);
  useEffect(() => {
    fetchUsers();
  }, []);

  const { fetchUsers, fetchAuthStatus, users } = props;
  const changeHandler = (e) => {
    let nam = e.target.name;
    let val = e.target.value;
    setUserObj({
      ...userObj,
      [nam]: val,
    });
  };
  // console.log(props)
  const history=useHistory()
  const submitHandler = async (e) => {
    e.preventDefault();
    let flag = 0;

    if (users.length !== 0) {
      for (let user of users) {
        if (
          user.email === userObj.email &&
          user.password === userObj.password
        ) {
          flag = flag + 1;
          setAlert(true);
          fetchAuthStatus(user.role, user.email, user.name);
          localStorage.setItem("user_stored", user.name);
          localStorage.setItem("access", user.role);
          if(props.location.data.fromModal)
          props.history.go(-2);
          else
          history.push("/")
          break;
        }
      }

      if (flag === 0) {
        // console.log("when flag is 0");
        // alert("Please Check your credentials or SignUp");
        setAlertf(true)
      }
    }
  };
  return (
    <>
     {
      alertdisplayf?
    <div class="alert alert-primary" role="alert" >
  Please Check your credentials or SignUp
</div>:""}
    <form onSubmit={submitHandler} className="col-md-4 offset-md-4 myForm">
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          className="form-control"
          onChange={changeHandler}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          className="form-control"
          onChange={changeHandler}
        />
      </div>
      <input type="submit" name="Sign In" className="btn btn-primary" />
      {alertdisplay ? (
        <div className="alert alert-success" id="success-alert" role="alert">
          Login Success
        </div>
      ) : (
        " "
      )}
    </form>
    </>
  );
};

const mapStateToProps = (state) => ({
  users: getUsers(state),
});
const mapDispatchToProps = {
  fetchUsers,
  fetchAuthStatus,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
