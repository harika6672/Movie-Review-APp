import React, { useState, useEffect } from "react";
import axios from "axios";
import { fetchLanguages } from "../Actions/fetch";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getLanguages, getAuthValue, getRole } from "../Reducers/reducer";

const ShowLanguages = (props) => {
  const {
    fetchLanguages,

    languages,

    isAdmin,
  } = props;
  const [alertdisplay, setAlert]=useState(false)
  useEffect(() => {
    fetchLanguages();
  }, []);
  const deleteItem = (l_id) => {
    // console.log(l_id);
    axios
      .delete(`/languages/${l_id}`)

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
  return (
    <>
    {
      alertdisplay?
    <div class="alert alert-primary" role="alert" >
  Language got deleted!!
</div>:""}
    <table className="table table-hover table-responsive">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Category Name</th>
          <th scope="col">Update Action</th>
          <th scope="col">Delete Action</th>
        </tr>
      </thead>
      <tbody>
        {languages.map((language, index) => (
          <tr>
            <td>{index + 1}</td>
            <td>{language.language}</td>
            <td>
              <Link to={`/admin/update-language/:${language._id}`}>Update</Link>
            </td>
            <td>
              <a href="#" onClick={() => deleteItem(language._id)}>
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
  languages: getLanguages(state),
  isAuth: getAuthValue(state),
  isAdmin: getRole(state),
});
const mapDispatchToProps = {
  fetchLanguages,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowLanguages);
