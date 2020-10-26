import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import { fetchAuthStatus, fetchCategoriesByID } from "../Actions/fetch";
import { getCategoryById } from "../Reducers/reducer";
const UpdateCategory = (props) => {
  const { fetchCategoriesByID, category } = props;

  const inputRef = React.useRef(null);
  const clearFields = () => {
    // console.log("In clear function");
    inputRef.current.value = " ";
  };

  const c_id = props.match.params.c_id.slice(1);

  useEffect(() => {
    if (category) {
      window.location.reload();
    }
    async function fetchAction() {
      await fetchCategoriesByID(c_id);
    }
    fetchAction();
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();

    axios
      .patch(`/categories/${c_id}`, {
        category: inputRef.current.value,
      })
      .then((response) => {
        // console.log(response);
        clearFields();
      })
      .catch((err) => {
        // console.log(err);
      });
  };
  return category ? (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <label htmlFor="category">Category</label>
        {/* {console.log(category)} */}
        <input
          type="text"
          name="category"
          id="category"
          defaultValue={category.category}
          className="form-control"
          ref={inputRef}
          onChange={(e) => ({
            ...category,
            category: inputRef.current.value,
          })}
        />
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-primary">
          Update Category
        </button>
      </div>
    </form>
  ) : (
    "No data"
  );
};
const mapStateToProps = (state) => ({
  category: getCategoryById(state),
});
const mapDispatchToProps = {
  fetchCategoriesByID,
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateCategory);
