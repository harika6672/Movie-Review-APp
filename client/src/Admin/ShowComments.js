import React, { useState, useEffect } from "react";
import { fetchCategories } from "../Actions/fetch";
import axios from "axios";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getCategories, getAuthValue, getRole } from "../Reducers/reducer";

const ShowComments = (props) => {
  const {
    fetchCategories,

    categories,

    isAdmin,
  } = props;
  const [alertdisplay, setAlert]=useState(false)
  const deleteItem = (c_id) => {
    console.log(c_id);
    axios
      .delete(`/categories/${c_id}`)

      .then((res) => {
        console.log(res.status);
        // alert("Item Deleted");
        setAlert(true)
        setTimeout(()=>window.location.reload(),5000)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchCategories();
  }, []);
  return (
    <>
     {
      alertdisplay?
    <div class="alert alert-primary" role="alert" >
  Category got deleted!!
</div>:""}
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Category Name</th>
          <th scope="col">Update Action</th>
          <th scope="col">Delete Action</th>
        </tr>
      </thead>
      <tbody>
        {categories.map((category, index) => (
          <tr key={category._id}>
            <td>{index + 1}</td>
            <td>{category.category}</td>
            <td>
              <Link to={`/admin/update-category/:${category._id}`}>Update</Link>
            </td>
            <td>
              <a href="#" onClick={() => deleteItem(category._id)}>
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
  categories: getCategories(state),
  isAuth: getAuthValue(state),
  isAdmin: getRole(state),
});
const mapDispatchToProps = {
  fetchCategories,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowComments);
