import React, { useState } from "react";
import axios from "axios";

const AddCategory = () => {
  const [categoryObj, setCategory] = useState({ category: "" });
  const [alertdisplay, setAlert]=useState(false)
  const clearFields = () => {
    setCategory({...categoryObj,category:""});
  };
  const submitHandler = (e) => {
    e.preventDefault();

    console.log(categoryObj);
    axios
      .post("http://localhost:8000/categories", categoryObj)
      .then((response) => {
        console.log(response);
        setAlert(true)
        clearFields();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <label htmlFor="language">Category</label>
        <input
          type="text"
          name="language"
          id="language"
          className="form-control"
          onChange={(e) =>
            setCategory({ ...categoryObj, category: e.target.value })
          }
          value={categoryObj.category}
        />
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-primary">
          Add Category
        </button>
      </div>
    </form>
     
     {
       alertdisplay?
     <div class="alert alert-primary" role="alert" >
   Yay..Category got added!!
 </div>:""}
 </>
  );
};

export default AddCategory;
