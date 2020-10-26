import React, { useState, useEffect } from "react";
import { fetchComments } from "../Actions/fetch";
import axios from "axios";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getAllComments, getAuthValue, getRole } from "../Reducers/reducer";

const ShowComments = (props) => {
  const {
    fetchComments,

    all_comments,

    isAdmin,
  } = props;
  const [alertdisplay, setAlert]=useState(false)
  const deleteItem = (c_id) => {
    // console.log(c_id);
    axios
      .delete(`/comments/${c_id}`)

      .then((res) => {
        // console.log(res.status);
        // alert("Item Deleted");
        setAlert(true)
        setTimeout(()=>window.location.reload(),2000)
      })
      .catch((err) => {
        // console.log(err);
      });
  };
  useEffect(() => {
    fetchComments();
  }, []);
  return (
    <>
     {
      alertdisplay?
    <div class="alert alert-primary" role="alert" >
  Comment got deleted!!
</div>:""}
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Post Name</th>
          <th scope="col">Delete Action</th>
        </tr>
      </thead>
      <tbody>
        {all_comments.map((comment, index) => (
          <tr key={comment._id}>
            <td>{index + 1}</td>
            <td>{comment.post_id}</td>
            <td>{comment.comment}</td>
            <td>
              <a href="#" onClick={() => deleteItem(comment._id)}>
                Delete
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </>
  );
};
const mapStateToProps = (state) => ({
  all_comments: getAllComments(state),
  isAuth: getAuthValue(state),
  isAdmin: getRole(state),
});
const mapDispatchToProps = {
  fetchComments,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowComments);
