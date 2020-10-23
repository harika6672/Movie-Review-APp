import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import { fetchMovieByGenre } from "../Actions/fetch";
import { getMovieByGenre, getDataPending } from "../Reducers/reducer";

import "../css/Movies.css";
const GenreSpecific = (props) => {
  const { genreSpecificMovies, fetchMovieByGenre, pending } = props;
  useEffect(() => {
    const genreName = props.match.params.gname.slice(1);
    console.log(genreName);
    async function fetchData() {
      await fetchMovieByGenre(genreName);
    }
    fetchData();
  }, [props.match.params.gname]);

  return (
    <>
      {pending ? (
        <div style={{ textAlign: "center" }}>
          <Loader type="Grid" color="#00BFFF" height={100} width={100} />
        </div>
      ) : genreSpecificMovies.length !== 0 ? (
        genreSpecificMovies.map((movie) => (
          <div className="post_movie">
            <img src={movie.movieImg} alt="img" border="0" />

            <h2>
              <Link to={`/movie-view/:${movie._id}`}>{movie.movieName}</Link>
            </h2>
          </div>
        ))
      ) : (
        <p>No data</p>
      )}
    </>
  );
};
const mapStateToProps = (state) => ({
  genreSpecificMovies: getMovieByGenre(state),
  pending: getDataPending(state),
});
const mapDispatchToProps = {
  fetchMovieByGenre,
};

export default connect(mapStateToProps, mapDispatchToProps)(GenreSpecific);
