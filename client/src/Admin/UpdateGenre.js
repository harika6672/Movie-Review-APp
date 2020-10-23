import React, {  useEffect } from "react";

import { connect } from "react-redux";
import axios from "axios";
import { fetchGenresByID } from "../Actions/fetch";
import { getGenreById } from "../Reducers/reducer";
const UpdateCategory = (props) => {
  const { fetchGenresByID, genre } = props;

  const inputRef = React.useRef(null);
  const clearFields = () => {
    console.log("In clear function");
    inputRef.current.value = " ";
  };

  const g_id = props.match.params.g_id.slice(1);

  useEffect(() => {
    if (genre) {
      window.location.reload();
    }
    async function fetchAction() {
      await fetchGenresByID(g_id);
    }
    fetchAction();
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();

    axios
      .patch(`/genres/${g_id}`, {
        genre: inputRef.current.value,
      })
      .then((response) => {
        console.log(response);
        clearFields();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return genre ? (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <label htmlFor="genre">Genre</label>
        {console.log(genre)}
        <input
          type="text"
          name="genre"
          id="genre"
          defaultValue={genre.genre}
          className="form-control"
          ref={inputRef}
          onChange={(e) => ({
            ...props,
            category: inputRef.current.value,
          })}
        />
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-primary">
          Update Category
        </button>
      </div>
    </form>
  ) : (
    "No data"
  );
};
const mapStateToProps = (state) => ({
  genre: getGenreById(state),
});
const mapDispatchToProps = {
  fetchGenresByID,
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateCategory);
