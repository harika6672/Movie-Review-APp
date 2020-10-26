import React, { useState, useEffect } from "react";

import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Loader from "react-loader-spinner";
import { fetchMovieByCategory } from "../Actions/fetch";
import { getMovieByCategory, getDataPending } from "../Reducers/reducer";
import "../css/Movies.css";
const CategorySpecific = (props) => {
  const { categorySpecificMovies, fetchMovieByCategory, pending } = props;
  useEffect(() => {
    const categoryName = props.match.params.cname.slice(1);
    // console.log(categoryName);
    async function fetchData() {
      await fetchMovieByCategory(categoryName);
    }
    fetchData();
  }, [props.match.params.cname]);

  return (
    <>
      {pending ? (
        <div style={{ textAlign: "center" }}>
          <Loader type="Grid" color="#00BFFF" height={100} width={100} />
        </div>
      ) : categorySpecificMovies.length !== 0 ? (
        categorySpecificMovies.map((movie) => (
          <div className="post_movie">
            <img src={movie.movieImg} alt="img" border="0" />

            <h2>
              <Link to={`/movie-view/:${movie._id}`}>{movie.movieName}</Link>
            </h2>
          </div>
        ))
      ) : (
        "No data"
      )}
    </>
  );
};
const mapStateToProps = (state) => ({
  categorySpecificMovies: getMovieByCategory(state),
  pending: getDataPending(state),
});
const mapDispatchToProps = {
  fetchMovieByCategory,
};

export default connect(mapStateToProps, mapDispatchToProps)(CategorySpecific);
