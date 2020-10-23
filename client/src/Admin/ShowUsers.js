import React, { useState, useEffect } from "react";
import axios from "axios";
import { fetchUsers } from "../Actions/fetch";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getUsers, getAuthValue, getRole } from "../Reducers/reducer";
const ShowUsers = (props) => {
  const {
    fetchUsers,

    users,

    isAdmin,
  } = props;

  const [alertdisplay, setAlert]=useState(false)
  
  useEffect(() => {
    fetchUsers();
  }, []);
  const deleteItem = (u_id) => {
    console.log(u_id);
    axios
      .delete(`/user/${u_id}`)

      .then((res) => {
        console.log(res.status);
        // alert("Item Deleted");
        setAlert(true)
        setTimeout(()=>window.location.reload(),2000)
        
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
    {
      alertdisplay?
    <div class="alert alert-primary" role="alert" >
  User got deleted!!
</div>:""}
    <div className="hscroll">
<table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">User mail</th>
          <th scope="col">User Password</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr>
            <td>{index + 1}</td>
            <td>{user.email}</td>
            <td>{user.password}</td>
            <td>
              <a href="#" onClick={() => deleteItem(user._id)}>
                Delete
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
    </>
  );
};
const mapStateToProps = (state) => ({
  users: getUsers(state),
  isAuth: getAuthValue(state),
  isAdmin: getRole(state),
});
const mapDispatchToProps = {
  fetchUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowUsers);
