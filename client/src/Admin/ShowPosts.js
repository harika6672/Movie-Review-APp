import React, { useState, useEffect } from "react";
import axios from "axios";
import { fetchMovies } from "../Actions/fetch";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Pagination from "react-js-pagination";
import { getMovies, getAuthValue, getRole, getPostsCount } from "../Reducers/reducer";

const ShowPosts = (props) => {
  const {
    fetchMovies,

    posts,
count,
    isAdmin,
  } = props;
  const [alertdisplay, setAlert]=useState(false)
  const [activePage, setPage]=useState(1)

  useEffect(() => {
    fetchMovies(1,5);
  }, []);
  const deleteItem = (p_id) => {
    console.log(p_id);
    axios
      .delete(`/movie/${p_id}`)

      .then((res) => {
        console.log(res.status);
        // alert("Item Deleted");
        setAlert(true)
        setTimeout(()=>window.location.reload(),2000)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handlePageChange=(pageNumber)=>{
    console.log("Page change")
    console.log(pageNumber)
    fetchMovies(pageNumber,5)
    setPage(pageNumber)
  }
  return (
    <>
     {
      alertdisplay?
    <div class="alert alert-primary" role="alert" >
  Post got deleted!!
</div>:""}
    <div className="hscroll">
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Movie Name</th>
          <th scope="col">Category Name</th>
          <th scope="col">Genre Name</th>
          <th scope="col">Language Name</th>

          <th scope="col">Movie Cast</th>
          <th scope="col">Movie Image</th>
          <th scope="col">Movie review</th>
          <th scope="col">Created Time</th>
          <th scope="col">Update Action</th>
          <th scope="col">Delete Action</th>
        </tr>
      </thead>
      <tbody>
        {posts.map((post, index) => (
          <tr>
            <td>{(activePage-1)*3+(index + 1)}</td>
            <td>{post.movieName}</td>
            <td>{post.category}</td>
            <td>{post.genre}</td>
            <td>{post.language}</td>
            <td>{post.movieCast}</td>
            <td>
              <img
                src={post.movieImg}
                style={{ width: "100px", height: "100px" }}
              />
            </td>
            <td>{post.summary}</td>
            <td>{post.createdAt}</td>
            <td>
              <Link to={`/admin/update-post/:${post._id}`}>Update</Link>
            </td>
            <td>
              <a href="#" onClick={() => deleteItem(post._id)}>
                Delete
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
    <div className="col-12">
    {posts.length>0?
   
    <Pagination
         activePage={activePage}
         totalItemsCount={count}
         onChange={handlePageChange}
         itemClass="page-item"
linkClass="page-link"
itemsCountPerPage={3}
          
          pageRangeDisplayed={5}
         />:""}
    
    </div>
    </>
  );
};
const mapStateToProps = (state) => ({
  posts: getMovies(state),
  isAuth: getAuthValue(state),
  isAdmin: getRole(state),
  count:getPostsCount(state)
});
const mapDispatchToProps = {
  fetchMovies,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowPosts);
