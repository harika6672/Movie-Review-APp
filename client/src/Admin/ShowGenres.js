import React, { useState, useEffect } from "react";
import { fetchGenres } from "../Actions/fetch";
import { connect } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
import { getGenres, getAuthValue, getRole } from "../Reducers/reducer";
const ShowCategories = (props) => {
  const {
    fetchGenres,

    genres,

    isAdmin,
  } = props;
  const [alertdisplay, setAlert]=useState(false)
  useEffect(() => {
    fetchGenres();
  }, []);
  const deleteItem = (g_id) => {
    // console.log(g_id);
    axios
      .delete(`/genres/${g_id}`)

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
  Genre got deleted!!
</div>:""}
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Genre Name</th>
          <th scope="col">Update Action</th>
          <th scope="col">Delete Action</th>
        </tr>
      </thead>
      <tbody>
        {genres.map((genre, index) => (
          <tr>
            <td>{index + 1}</td>
            <td>{genre.genre}</td>
            <td>
              <Link to={`/admin/update-genre/:${genre._id}`}>Update</Link>
            </td>
            <td>
              <a href="#" onClick={() => deleteItem(genre._id)}>
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
  genres: getGenres(state),
  isAuth: getAuthValue(state),
  isAdmin: getRole(state),
});
const mapDispatchToProps = {
  fetchGenres,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowCategories);
