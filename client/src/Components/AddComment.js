import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import CustomModal from "../utils/CustomModal";

const AddComment = (props) => {
  const [comment, setComment] = useState("");
  const [isModal, setModal] = useState(false);

  const changeHandler = (e) => {
   
    setComment(e.target.value);
  };
  const { role, post_id, user,movieId } = props;

  let localstored_name = localStorage.getItem("user_stored") || " ";
  const submitHandler = (e) => {
    e.preventDefault();
    const commentObj = {
      role,
      comment,
      post_id,
      user,
     
    };
    console.log(commentObj);
   
    if (user === " " || user===null) {
      console.log("modal open")
      setModal(true);
    } else {
      console.log("In post block")
      axios
        .post("/comments", commentObj)
        .then((res) => {
          console.log(res);
          setComment(" ");
          
          window.location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
    }
   };

  return (
    <div style={{paddingTop:"50px"}}>
      <h6 style={{ fontStyle: "italic" }}>Add Comment</h6>
    
      {isModal ? (
       
        <CustomModal id={movieId}/>
      ) : (
        console.log("modal is false")
      )}
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="comment"
          onChange={changeHandler}
          className="form-control"
          value={comment || " "}
          placeholder="Comment Here"
          style={{border: "1px solid #1ad1ff"}}
        />
        <small style={{color:"red"}}>*Please Sign In to Comment</small>
        <span style={{paddingLeft:"10px"}}>
          <Link to="/ways/signin">Sign In</Link>
        </span>
        <br />
        <button
          type="submit"
          name="Submit"
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#myModal"
          disabled={!comment}
        >
          Submit
        </button>
      </form>
    </div>
  );
};
export default AddComment;
