import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import { fetchMovieByLanguage } from "../Actions/fetch";
import { getMovieByLanguage, getDataPending } from "../Reducers/reducer";

import "../css/Movies.css";
const LanguageSpecific = (props) => {
  const { languageSpecificMovies, fetchMovieByLanguage, pending } = props;
  useEffect(() => {
    const languageName = props.match.params.lname.slice(1);
    console.log(languageName);
    async function fetchData() {
      await fetchMovieByLanguage(languageName);
    }
    fetchData();
  }, [props.match.params.lname]);

  return (
    <>
      {pending ? (
        <div style={{ textAlign: "center" }}>
          <Loader type="Grid" color="#00BFFF" height={100} width={100} />
        </div>
      ) : languageSpecificMovies.length !== 0 ? (
        languageSpecificMovies.map((movie) => (
          <div className="post_movie">
            <img src={movie.movieImg} alt="img" border="0" />

            <h2>
              <Link to={`/movie/:${movie._id}`}>{movie.movieName}</Link>
            </h2>

            <p>{movie.summary}</p>
          </div>
        ))
      ) : (
        "No data"
      )}
    </>
  );
};
const mapStateToProps = (state) => ({
  languageSpecificMovies: getMovieByLanguage(state),
  pending: getDataPending(state),
});
const mapDispatchToProps = {
  fetchMovieByLanguage,
};

export default connect(mapStateToProps, mapDispatchToProps)(LanguageSpecific);
