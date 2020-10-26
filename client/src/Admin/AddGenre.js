import React, { useState } from "react";
import axios from "axios";

const AddGenre = () => {
  const [genreObj, setGenre] = useState({ genre: "" });
  const [alertdisplay, setAlert]=useState(false)
  const clearFields = () => {
    setGenre({...genreObj,genre:""});
  };
  const submitHandler = (e) => {
    e.preventDefault();

    // console.log(genreObj);
    axios
      .post("/genres", genreObj)
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
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <label htmlFor="genre">Genre</label>
        <input
          type="text"
          name="genre"
          id="genre"
          className="form-control"
          onChange={(e) => setGenre({ ...genreObj, genre: e.target.value })}
          value={genreObj.genre}
        />
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-primary">
          Add Genre
        </button>
      </div>
    </form>
    {
       alertdisplay?
     <div class="alert alert-primary" role="alert" >
   Yay..Genre got added!!
 </div>:""}
 </>
  );
};

export default AddGenre;
