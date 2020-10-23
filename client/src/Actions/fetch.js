import axios from "axios";
import {
  fetchGenresSuccess,
  fetchLanguagesSuccess,
  fetchCategoriesSuccess,
  fetchMoviesSuccess,
  fetchMovieSuccessByID,
  fetchMovieSuccessByGenre,
  fetchMovieSuccessByLanguage,
  fetchMovieSuccessByCategory,
  fetchUsersSuccess,
  fetchCommentsSuccessByID,
  fetchDataPending,
  fetchCategoriesSuccessByID,
  fetchGenresSuccessByID,
  fetchLanguagesSuccessByID,
} from "./action";
export function fetchGenres() {
  return (dispatch) => {
    dispatch(fetchDataPending());
    axios
      .get("/genres")

      .then((res) => {
        console.log(res);
        dispatch(fetchGenresSuccess(res));
        return res;
      });
  };
}
export function fetchLanguages() {
  return (dispatch) => {
    dispatch(fetchDataPending());
    axios
      .get("/languages")

      .then((res) => {
        console.log(res);
        dispatch(fetchLanguagesSuccess(res));
        return res;
      });
  };
}
export function fetchCategories() {
  return (dispatch) => {
    dispatch(fetchDataPending());
    axios
      .get("/categories")

      .then((res) => {
        console.log(res);
        dispatch(fetchCategoriesSuccess(res));
        return res;
      });
  };
}
export function fetchMovies(page,limit) {
 
  return (dispatch) => {
    dispatch(fetchDataPending());
    axios
      .get(`/movies?_page=${page}&_limit=${limit}`)

      .then((res) => {
        console.log(res);
        dispatch(fetchMoviesSuccess(res));
        return res;
      });
  };
}
export function fetchMovieByID(id) {
  return (dispatch) => {
    console.log(id);
    dispatch(fetchDataPending());
    axios
      .get(`/movie/${id}`)

      .then((res) => {
        console.log(res);
        dispatch(fetchMovieSuccessByID(res));
        return res;
      });
  };
}
export function fetchCategoriesByID(c_id) {
  return (dispatch) => {
    console.log(c_id);
    dispatch(fetchDataPending());
    axios
      .get(`/categories/${c_id}`)

      .then((res) => {
        console.log("In fetch categories by id");
        console.log(res);
        dispatch(fetchCategoriesSuccessByID(res));
        return res;
      });
  };
}
export function fetchGenresByID(g_id) {
  return (dispatch) => {
    console.log(g_id);
    dispatch(fetchDataPending());
    axios
      .get(`/genres/${g_id}`)

      .then((res) => {
        console.log("In fetch genres by id");
        console.log(res);
        dispatch(fetchGenresSuccessByID(res));
        return res;
      });
  };
}

export function fetchLanguagesByID(l_id) {
  return (dispatch) => {
    console.log(l_id);
    dispatch(fetchDataPending());
    axios
      .get(`/languages/${l_id}`)

      .then((res) => {
        console.log("In fetch languages by id");
        console.log(res);
        dispatch(fetchLanguagesSuccessByID(res));
        return res;
      });
  };
}
export function fetchMovieByGenre(genre) {
  return (dispatch) => {
    console.log(genre);
    dispatch(fetchDataPending());
    axios
      .get(`/genre/movie/${genre}`)

      .then((res) => {
        console.log(res);
        dispatch(fetchMovieSuccessByGenre(res));
        return res;
      });
  };
}
export function fetchMovieByLanguage(language) {
  return (dispatch) => {
    console.log(language);
    dispatch(fetchDataPending());
    axios
      .get(`/language/movieSpecificLang/${language}`)

      .then((res) => {
        console.log(res);
        dispatch(fetchMovieSuccessByLanguage(res));
        return res;
      });
  };
}
export function fetchMovieByCategory(category) {
  return (dispatch) => {
    console.log(category);
    dispatch(fetchDataPending());
    axios
      .get(`/category/movieCategory/${category}`)

      .then((res) => {
        console.log(res);
        dispatch(fetchMovieSuccessByCategory(res));
        return res;
      });
  };
}

export function fetchUsers() {
  console.log("fetching users");

  return (dispatch) => {
    dispatch(fetchDataPending());
    axios
      .get("/signin")

      .then((res) => {
        console.log(res);
        dispatch(fetchUsersSuccess(res));
        return res;
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
export function fetchAuthStatus(role, email, name) {
  return (dispatch) => {
    dispatch({
      type: "FETCH_AUTH",
      role: role,
      current_user: email,
      current_user_name: name,
    });
  };
}

export function fetchCommentsByID(id) {
  return (dispatch) => {
    console.log(id);
    dispatch(fetchDataPending());
    axios
      .get(`/comments/${id}`)

      .then((res) => {
        console.log(res);

        dispatch(fetchCommentsSuccessByID(res));
        return res;
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
