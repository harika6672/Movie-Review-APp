import React, { useState } from "react";
import axios from "axios";

const AddLanguage = () => {
  const [langObj, setLang] = useState({ language: "" });
  const [alertdisplay, setAlert]=useState(false)
  const clearFields = () => {
    setLang({...langObj, language:""});
  };
  const submitHandler = (e) => {
    e.preventDefault();

    console.log(langObj);
    axios
      .post("http://localhost:8000/languages", langObj)
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
        <label htmlFor="language">Language</label>
        <input
          type="text"
          name="language"
          id="language"
          className="form-control"
          onChange={(e) => setLang({ ...langObj, language: e.target.value })}
        />
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-primary">
          Add Language
        </button>
      </div>
    </form>
    {
       alertdisplay?
     <div class="alert alert-primary" role="alert" >
   Yay..Language got added!!
 </div>:""}
    </>
  );
};

export default AddLanguage;
