import React, { useState, useEffect } from "react";

import { connect } from "react-redux";
import axios from "axios";
import { fetchMovieByID } from "../Actions/fetch";
import { fetchGenres, fetchLanguages, fetchCategories } from "../Actions/fetch";

import { getGenres, getLanguages, getCategories } from "../Reducers/reducer";
import { getMovieByID } from "../Reducers/reducer";
import { Editor } from "@tinymce/tinymce-react";

const UpdatePost = (props) => {
  const {
    fetchMovieByID,
    
    fetchGenres,
    fetchLanguages,
    fetchCategories,
    genres,
    languages,
    categories,
    post
  } = props;
  const [content,setContent]=useState("")
  const movieRef = React.useRef("");
  const genreRef = React.useRef("");

  const categoryRef = React.useRef("");
  const castRef = React.useRef("");
  const languageRef = React.useRef("");
  const summaryRef = React.useRef("");

  const clearFields = () => {
    // console.log("In clear function");
    movieRef.current.value = " ";
    categoryRef.current.value = " ";
    genreRef.current.value = " ";
    languageRef.current.value = " ";
    castRef.current.value = " ";

    summaryRef.current.value = " ";
  };

  const id = props.match.params.p_id.slice(1);
  // console.log(id)

  useEffect(() => {
    if (post) {
      window.location.reload();
    }
    async function fetchAction() {
      await fetchGenres();
      await fetchLanguages();
      await fetchCategories();
      await fetchMovieByID(id);
    }
    fetchAction();
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
      let obj={
        movieName:movieRef.current.value,
        movieCast:castRef.current.value,
        summary:content,
        genre:genreRef.current.value,
        language:languageRef.current.value,
        category:categoryRef.current.value
      }

      // console.log(obj);
      axios
        .patch(`/movie/${id}`, obj)
        .then((response) => {
          // console.log(response);
          clearFields();
        })
        .catch((err) => {
          // console.log(err);
        });
    }

  return post ? (
    <div>
      <form onSubmit={submitHandler} name="myForm">
        <div className="form-group">
          <label htmlFor="movieName">Movie Name</label>
          <input
            type="text"
            className="form-control"
            name="movieName"
            id="movieName"
            ref={movieRef}
            defaultValue={post.movieName || ""}
            onChange={(e) => ({
              ...post,
              movieName: movieRef.current.value,
            })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="movieCast">Movie Cast</label>
          <input
            type="text"
            className="form-control"
            name="movieCast"
            id="movieCast"
            ref={castRef}
            defaultValue={post.movieCast || ""}
            onChange={(e) => ({
              ...post,
              movieCast: castRef.current.value,
            })}
          />
        </div>
        <div className="form-group col-md-4">
          <label htmlFor="genre">Genre</label>
          <select
            defaultValue={post.genre || ""}
            className="form-control"
            name="genre"
            ref={genreRef}
            onChange={(e) => ({
              ...post,
              genre: genreRef.current.value,
            })}
          >
            <option defaultValue="">Select genre</option>
            {genres.map((genre) => (
              <option defaultValue={genre.genre} key={genre._id}>
                {genre.genre}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group col-md-4">
          <label htmlFor="language">Language</label>
          <select
            defaultValue={post.language || ""}
            className="form-control"
            name="language"
            ref={languageRef}
            onChange={(e) => ({
              ...post,
              language: languageRef.current.value,
            })}
          >
            <option defaultValue="">Select Language</option>
            {languages.map((lang) => (
              <option defaultValue={lang.language} key={lang._id}>
                {lang.language}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group col-md-4">
          <label htmlFor="category">Category</label>
          <select
            defaultValue={post.category || ""}
            className="form-control"
            name="category"
            ref={categoryRef}
            onChange={(e) => ({
              ...post,
              category: categoryRef.current.value,
            })}
          >
            <option defaultValue="">Select Category</option>
            {categories.map((category) => (
              <option defaultValue={category.category} key={category._id}>
                {category.category}
              </option>
            ))}
          </select>
        </div>
        <div className="col-12">
        <Editor
          apiKey="4r81nswpuwsoutlarnq4w517weqzjeq6admz02belrabf2mv"
          name="summary"
         
          init={{
            height: 500,
            forced_root_block: "",
            plugins: [
              'advlist autolink lists link image charmap print preview anchor',
              'searchreplace visualblocks code fullscreen',
              'insertdatetime media table paste code help wordcount'
            ],
            toolbar:
              'undo redo | formatselect | bold italic backcolor | \
              alignleft aligncenter alignright alignjustify | \
              bullist numlist outdent indent | removeformat | help'
          }}
          onEditorChange={(content, editor) => {
            setContent(content)
          }
        }
        />
        </div>
        
        <input type="submit" className="btn btn-primary" value="Update"/>
      </form>
    </div>
  ) : <p>No data</p>
  
}
const mapStateToProps = (state) => ({
  post: getMovieByID(state),
  genres: getGenres(state),
  languages: getLanguages(state),
  categories: getCategories(state),
});
const mapDispatchToProps = {
  fetchMovieByID,
  fetchGenres,
  fetchCategories,
  fetchLanguages,
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdatePost);

              

