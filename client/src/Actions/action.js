export const FETCH_PRODUCTS_PENDING = "FETCH_PRODUCTS_PENDING";
export const FETCH_GENRES_SUCCESS = "FETCH_GENRES_SUCCESS";
export const FETCH_LANGUAGES_SUCCESS = "FETCH_LANGUAGES_SUCCESS";
export const FETCH_CATEGORIES_SUCCESS = "FETCH_CATEGORIES_SUCCESS";
export const FETCH_MOVIES_SUCCESS = "FETCH_MOVIES_SUCCESS";
export const FETCH_PRODUCTS_ERROR = "FETCH_PRODUCTS_ERROR";
export const FETCH_MOVIE_SUCCESS = "FETCH_MOVIE_SUCCESS";
export const FETCH_GENRE_SUCCESS = "FETCH_GENRE_SUCCESS";
export const FETCH_LANGUAGE_SUCCESS = "FETCH_LANGUAGE_SUCCESS";
export const FETCH_CATEGORY_SUCCESS = "FETCH_CATEGORY_SUCCESS";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_COMMENTS_SUCCESS = "FETCH_COMMENTS_SUCCESS";
export const FETCH_DATA_PENDING = "FETCH_DATA_PENDING";
export const FETCH_CATEGORIES_BY_ID_SUCCESS = "FETCH_CATEGORIES_BY_ID_SUCCESS";
export const FETCH_GENRES_BY_ID_SUCCESS = "FETCH_GENRES_BY_ID_SUCCESS";
export const FETCH_LANGUAGES_BY_ID_SUCCESS = "FETCH_LANGUAGES_BY_ID_SUCCESS";
export const FETCH_COMMENTS_ALL_SUCCESS="FETCH_COMMENTS_ALL_SUCCESS"
export function fetchGenresSuccess(result) {
  // console.log(result.data.data.genres);
  return {
    type: FETCH_GENRES_SUCCESS,
    result: result.data.data.genres,
  };
}
export function fetchLanguagesSuccess(result) {
  // console.log(result.data.data.languages);
  return {
    type: FETCH_LANGUAGES_SUCCESS,
    result: result.data.data.languages,
  };
}
export function fetchCategoriesSuccess(result) {
  // console.log(result.data.data.categories);
  return {
    type: FETCH_CATEGORIES_SUCCESS,
    result: result.data.data.categories,
  };
}
export function fetchMoviesSuccess(result) {
  // console.log(result.data.data.movies);
  return {
    type: FETCH_MOVIES_SUCCESS,
    result: result.data.data.movies,
    count:result.data.data.count
  };
}
export function fetchMovieSuccessByID(result) {
  // console.log(result.data.data.movie);
  return {
    type: FETCH_MOVIE_SUCCESS,
    result: result.data.data.movie,
  };
}
export function fetchMovieSuccessByGenre(result) {
  // console.log(result.data.data.genreSpecific);
  return {
    type: FETCH_GENRE_SUCCESS,
    result: result.data.data.genreSpecific,
  };
}
export function fetchMovieSuccessByLanguage(result) {
  // console.log(result.data.data.languageSpecific);
  return {
    type: FETCH_LANGUAGE_SUCCESS,
    result: result.data.data.languageSpecific,
  };
}
export function fetchMovieSuccessByCategory(result) {
  // console.log(result.data.data.categorySpecific);
  return {
    type: FETCH_CATEGORY_SUCCESS,
    result: result.data.data.categorySpecific,
  };
}
export function fetchUsersSuccess(result) {
  // console.log(result.data.data.users);
  return {
    type: FETCH_USERS_SUCCESS,
    result: result.data.data.users,
  };
}
export function fetchCommentsSuccess(result) {
  // console.log(result.data.data.all_comments);
  return {
    type: FETCH_COMMENTS_ALL_SUCCESS,
    result: result.data.data.all_comments,
  };
}
export function fetchCommentsSuccessByID(result) {
  // console.log(result.data.data.comments);
  return {
    type: FETCH_COMMENTS_SUCCESS,
    result: result.data.data.comments,
  };
}
export function fetchCategoriesSuccessByID(result) {
  // console.log(result.data.data.category);
  // console.log("In action... categories by id");
  return {
    type: FETCH_CATEGORIES_BY_ID_SUCCESS,
    result: result.data.data.category,
  };
}
export function fetchGenresSuccessByID(result) {
  // console.log(result.data.data.genre);
  // console.log("In action... genres by id");
  return {
    type: FETCH_GENRES_BY_ID_SUCCESS,
    result: result.data.data.genre,
  };
}
export function fetchLanguagesSuccessByID(result) {
  // console.log(result.data.data.language);
  // console.log("In action... languages by id");
  return {
    type: FETCH_LANGUAGES_BY_ID_SUCCESS,
    result: result.data.data.language,
  };
}
export function fetchDataPending() {
  return {
    type: FETCH_DATA_PENDING,
  };
}
