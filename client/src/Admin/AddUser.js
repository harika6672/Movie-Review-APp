import React, { useState, useEffect } from "react";
import axios from "axios";

const AddUser = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });
  const [alertdisplay, setAlert]=useState(false)
  const changeHandler = (e) => {
    let nam = e.target.name;
    let val = e.target.value;
    setUser({ ...user, [nam]: val });
  };
  const clearFields = () => {
    setUser({ ...user, name: " ", email: " ", password: " ", role: " " });
  };
  const SubmitUserData = (e) => {
    e.preventDefault();

    axios
      .post("/AddUser", user)
      .then((response) => {
        // console.log(response);
        setAlert(true)
        clearFields();
      })
      .catch((err) => {
        // console.log(err);
      });
  };
  return (
    <>
    <form onSubmit={SubmitUserData}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          className="form-control"
          onChange={changeHandler}
          value={user.name}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          className="form-control"
          onChange={changeHandler}
          value={user.email}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="text"
          name="password"
          className="form-control"
          onChange={changeHandler}
          value={user.password}
        />
      </div>

      <div className="form-group">
        <label htmlFor="role">Add Role</label>

        <select className="form-control" name="role" onChange={changeHandler}>
          <option value="">Select Role</option>

          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
      </div>
      <input type="submit" name="Add User" className="btn btn-primary" />
    </form>
     {
      alertdisplay?
    <div class="alert alert-primary" role="alert" >
  Yay..User got added!!
</div>:""}
    </>
  );
};

export default AddUser;
