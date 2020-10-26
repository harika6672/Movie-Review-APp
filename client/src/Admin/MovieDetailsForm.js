import React, { useState, useEffect } from "react";

import axios from "axios";
import { connect } from "react-redux";
import { Editor } from "@tinymce/tinymce-react";

import { fetchGenres, fetchLanguages, fetchCategories } from "../Actions/fetch";

import { getGenres, getLanguages, getCategories } from "../Reducers/reducer";

const MovieDetailsForm = (props) => {
  const [movieObj, setMovieObj] = useState({
    movieName: " ",
    movieCast: " ",
    movieImg: " ",
    summary: " ",
    genre: " ",
    language: " ",
    category: " ",
  });

  const {
    fetchGenres,
    fetchLanguages,
    fetchCategories,
    genres,
    languages,
    categories,
  } = props;
  const [alertdisplay, setAlert]=useState(false)
  useEffect(() => {
    fetchGenres();
    fetchLanguages();
    fetchCategories();
  }, []);
  const changeHandler = (e) => {
    let nam = e.target.name;
    let val = e.target.value;
    if (nam !== "movieImg") {
      setMovieObj({
        ...movieObj,
        [nam]: val,
      });
    } else {
      setMovieObj({
        ...movieObj,
        [nam]: e.target.files[0],
      });
    }
  };
  const handleEditorChange = (content, editor) => {
    setMovieObj({
      ...movieObj,
      summary: content,
    });
  };

  const clearFields = () => {
    const clearObj = {
      movieName: " ",
      movieCast: " ",
      movieImg: null,
      summary: null,
      genre: " ",
      language: " ",
      category: " ",
    };
    setMovieObj(clearObj);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    let flag = 0;
    for (let property in movieObj) {
      if (movieObj[property] === " " || movieObj[property] === null) {
        flag = flag + 1;

        alert("All Fields are required");
        break;
      }
    }

    if (flag === 0) {
      let data = new FormData();
      data.append("movieName", movieObj.movieName);
      data.append("movieCast", movieObj.movieCast);
      data.append("movieImg", movieObj.movieImg);
      data.append("summary", movieObj.summary);
      data.append("genre", movieObj.genre);
      data.append("language", movieObj.language);
      data.append("category", movieObj.category);

      // console.log(...data);
      axios
        .post("/movies", data)
        .then((response) => {
          // console.log(response);
          setAlert(true)
          clearFields();
        })
        .catch((err) => {
          // console.log(err);
        });
    }
  };
  return (
    <div>
      <form onSubmit={submitHandler} name="myForm">
        <div className="form-group">
          <label htmlFor="movieName">Movie Name</label>
          <input
            type="text"
            className="form-control"
            name="movieName"
            id="movieName"
            value={movieObj.movieName || ""}
            onChange={changeHandler}
          />
        </div>
        <div className="form-group">
          <label htmlFor="movieCast">Movie Cast</label>
          <input
            type="text"
            className="form-control"
            name="movieCast"
            id="movieCast"
            value={movieObj.movieCast || ""}
            onChange={changeHandler}
          />
        </div>
        <div className="form-row">
          <div className="form-group col-md-4">
            <label htmlFor="genre">Genre</label>

            <select
              className="form-control"
              name="genre"
              onChange={changeHandler}
              value={movieObj.genre || ""}
            >
              <option value="">Select Genre</option>
              {genres.map((genre) => (
                <option value={genre.genre} key={genre._id}>
                  {genre.genre}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="language">Language</label>
            <select
              value={movieObj.language || ""}
              className="form-control"
              name="language"
              onChange={changeHandler}
            >
              <option value="">Select Language</option>
              {languages.map((lang) => (
                <option value={lang.language} key={lang._id}>
                  {lang.language}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="category">Category</label>
            <select
              value={movieObj.category || ""}
              className="form-control"
              name="category"
              onChange={changeHandler}
            >
              <option value="">Select Category</option>
              {categories.map((category) => (
                <option value={category.category} key={category._id}>
                  {category.category}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="form-group">
          <input type="file" name="movieImg" onChange={changeHandler} />
          <small style={{color:"red"}}>**Image height and width should be in between 200 to 250px</small>
        </div>
        
        <Editor
          apiKey="4r81nswpuwsoutlarnq4w517weqzjeq6admz02belrabf2mv"
          value={movieObj.summary || " "}
          name="summary"
          init={{
            height: 500,
            forced_root_block: "",
          }}
          onEditorChange={handleEditorChange}
        />
        <input type="submit" className="btn btn-primary" />
      </form>
      {
      alertdisplay?
    <div class="alert alert-primary" role="alert" >
  Yay..Post got added!!
</div>:""}
    </div>
  );
};

//export default MovieDetailsForm;
const mapStateToProps = (state) => ({
  genres: getGenres(state),
  languages: getLanguages(state),
  categories: getCategories(state),
});
const mapDispatchToProps = {
  fetchGenres,
  fetchCategories,
  fetchLanguages,
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetailsForm);
