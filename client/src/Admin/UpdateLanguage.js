import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import { fetchAuthStatus, fetchLanguagesByID } from "../Actions/fetch";
import { getLanguageById } from "../Reducers/reducer";
const UpdateCategory = (props) => {
  const { fetchLanguagesByID, language } = props;

  const inputRef = React.useRef(null);
  const clearFields = () => {
    console.log("In clear function");
    inputRef.current.value = " ";
  };

  const l_id = props.match.params.l_id.slice(1);

  useEffect(() => {
    if (language) {
      window.location.reload();
    }
    async function fetchAction() {
      await fetchLanguagesByID(l_id);
    }
    fetchAction();
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();

    axios
      .patch(`/languages/${l_id}`, {
        language: inputRef.current.value,
      })
      .then((response) => {
        console.log(response);
        clearFields();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return language ? (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <label htmlFor="language">Language</label>
        {console.log(language)}
        <input
          type="text"
          name="language"
          id="language"
          defaultValue={language.language}
          className="form-control"
          ref={inputRef}
          onChange={(e) => ({
            ...language,
            language: inputRef.current.value,
          })}
        />
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-primary">
          Update Language
        </button>
      </div>
    </form>
  ) : (
    "No data"
  );
};
const mapStateToProps = (state) => ({
  language: getLanguageById(state),
});
const mapDispatchToProps = {
  fetchLanguagesByID,
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateCategory);
