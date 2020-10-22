import React, { useEffect } from "react";

import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import { fetchMovieByID, fetchCommentsByID } from "../Actions/fetch";
import {
  getMovieByID,
  getAuthValue,
  getRole,
  getCurrentUser,
  getCommentsByID,
  getCurrentUserName,
  getDataPending,
} from "../Reducers/reducer";
import ReactHtmlParser from 'react-html-parser';
// import { mapStateToProps, mapDispatchToProps } from "../utils/CommonData";
import "../css/Movies.css";
import AddComment from "./AddComment";
const MovieDisplay = (props) => {
  //   const [movieSt, setMovie] = useState(false);
  const movieId = props.match.params.id.slice(1);
  
  const {
    movie,
    fetchMovieByID,
    fetchCommentsByID,
    isAuth,
   
    
    comments,
    
    pending,
  } = props;
  useEffect(() => {
    async function fetchData() {
      await fetchMovieByID(movieId);
      await fetchCommentsByID(movieId);
      //   if (movie) setMovie(movie);
      //   setMovie(true);
    }
    fetchData();
  }, []);

  const user_stored = localStorage.getItem("user_stored");
  const access = localStorage.getItem("access");
  return (
    <div>
      {pending ? (
        <div style={{ textAlign: "center" }}>
          <Loader type="Grid" color="#00BFFF" height={100} width={100} />
        </div>
      ) : movie ? (
        <>
          <div className="post_movie">
            <img src={movie.movieImg} alt="img" border="0" />

            <h2 style={{fontStyle:"italic"}}>{movie.movieName}</h2>
          </div>
          
          {ReactHtmlParser(movie.summary)}
        
          
        </>
      ) : (
        "No data"
      )}
      {movie ? (
        <AddComment
          post_id={movie.movieName}
          role={access}
          auth={isAuth}
          user={user_stored}
          movieId={movieId}
        />
      ) : (
        ""
      )}

      <h4 style={{ fontStyle: "italic", paddingTop:"20px" }}>Comments:</h4>
      <div className="comments">
        {comments.length!==0
          ? comments.map((comment) => (
              <div className="row" key={comment._id} style={{    marginBottom: "24px",
                borderBottom: "1px solid #e2e2e2",
                paddingBottom: "28px"}}>
                <div>
                  <img src="http://placehold.it/64x64" alt="" />
                </div>
                <div className="col-md-6 col-9">
                  <h4>
                    {comment.user + " "}
                    <small>{comment.createdAt.substr(0, 10)}</small>
                  </h4>
                  {comment.comment}
                </div>
              </div>
            ))
          : <p>No comments yet</p>}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  movie: getMovieByID(state),
  isAuth: getAuthValue(state),
  isAdmin: getRole(state),
  user: getCurrentUser(state),
  name: getCurrentUserName(state),
  comments: getCommentsByID(state),

  pending: getDataPending(state),
});
const mapDispatchToProps = {
  fetchMovieByID,
  fetchCommentsByID,
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieDisplay);
// export default MovieDisplay;
