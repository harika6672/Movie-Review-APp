import {
  FETCH_DATA_PENDING,
  FETCH_LANGUAGES_SUCCESS,
  FETCH_GENRES_SUCCESS,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_PRODUCTS_ERROR,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIE_SUCCESS,
  FETCH_GENRE_SUCCESS,
  FETCH_LANGUAGE_SUCCESS,
  FETCH_CATEGORY_SUCCESS,
  FETCH_USERS_SUCCESS,
  FETCH_COMMENTS_SUCCESS,
  FETCH_CATEGORIES_BY_ID_SUCCESS,
  FETCH_GENRES_BY_ID_SUCCESS,
  FETCH_LANGUAGES_BY_ID_SUCCESS,
  FETCH_COMMENTS_ALL_SUCCESS
} from "../Actions/action";
const initialState = {
  pending: false,
  categories: [],
  languages: [],
  genres: [],
  movies: [],
  movie: {},
  genreSpecificMovies: [],
  languageSpecificMovies: [],
  categorySpecificMovies: [],
  error: null,
  isAuth: false,
  isAdmin: "user",
  users: [],
  current_user: " ",
  current_user_name: " ",
  comments: [],
  categoryById: [],
  genreById: [],
  languageById: [],
  postsCount:0,
  commentsAll:[]
};
const arrayBufferToBase64 = (buffer) => {
  var binary = "";
  var bytes = [].slice.call(new Uint8Array(buffer));
  bytes.forEach((b) => (binary += String.fromCharCode(b)));
  return window.btoa(binary);
};

const filtering_data = (res) => {
  res.map((t) => {
    var base64Flag = `data:${t.movieImg.contentType};base64,`;
    var imageStr = arrayBufferToBase64(t.movieImg.data.data);

    t.movieImg = base64Flag + imageStr;
  });
  console.log(res);
  return res;
};

export function mainReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA_PENDING:
      return {
        ...state,
        pending: true,
      };
    case "FETCH_AUTH":
      return {
        ...state,
        isAuth: true,
        isAdmin: action.role,
        current_user: action.current_user,
        current_user_name: action.current_user_name,
      };

    case FETCH_LANGUAGES_SUCCESS:
      return {
        ...state,
        pending: false,
        languages: action.result,
      };
    case FETCH_GENRES_SUCCESS:
      return {
        ...state,
        pending: false,
        genres: action.result,
      };
    case FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        pending: false,
        categories: action.result,
      };
    case FETCH_CATEGORIES_BY_ID_SUCCESS: {
      return {
        ...state,
        pending: false,
        categoryById: action.result,
      };
    }
    case FETCH_GENRES_BY_ID_SUCCESS: {
      return {
        ...state,
        pending: false,
        genreById: action.result,
      };
    }
    case FETCH_LANGUAGES_BY_ID_SUCCESS: {
      return {
        ...state,
        pending: false,
        languageById: action.result,
      };
    }
    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        pending: false,
        movies: filtering_data(action.result),
        postsCount:action.count
      };
    case FETCH_MOVIE_SUCCESS:
      return {
        ...state,
        pending: false,
        movie: filtering_data(action.result),
      };
    case FETCH_COMMENTS_SUCCESS:
      return {
        ...state,
        pending: false,
        comments: action.result,
      };
      case FETCH_COMMENTS_ALL_SUCCESS:
      return {
        ...state,
        pending: false,
        commentsAll: action.result,
      };
    case FETCH_GENRE_SUCCESS:
      return {
        ...state,
        pending: false,
        genreSpecificMovies: filtering_data(action.result),
      };
    case FETCH_LANGUAGE_SUCCESS:
      return {
        ...state,
        pending: false,
        languageSpecificMovies: filtering_data(action.result),
      };
    case FETCH_CATEGORY_SUCCESS:
      return {
        ...state,
        pending: false,
        categorySpecificMovies: filtering_data(action.result),
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        pending: false,
        users: action.result,
      };
    case FETCH_PRODUCTS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };

    default:
      return state;
  }
}

export const getGenres = (state) => {
  console.log(state.genres);
  return state.genres;
};
export const getLanguages = (state) => {
  console.log(state.languages);
  return state.languages;
};
export const getCategories = (state) => {
  console.log(state.categories);
  return state.categories;
};
export const getMovies = (state) => {
  console.log(state.movies);
  return state.movies;
};
export const getMovieByID = (state) => {
  console.log(state.movie[0]);
  return state.movie[0];
};
export const getMovieByGenre = (state) => {
  console.log(state.genreSpecificMovies);
  return state.genreSpecificMovies;
};
export const getMovieByLanguage = (state) => {
  console.log(state.languageSpecificMovies);
  return state.languageSpecificMovies;
};
export const getMovieByCategory = (state) => {
  console.log(state.categorySpecificMovies);
  return state.categorySpecificMovies;
};
export const getDataPending = (state) => state.pending;
export const getProductsError = (state) => state.error;
export const getAuthValue = (state) => {
  return state.isAuth;
};
export const getRole = (state) => {
  return state.isAdmin;
};

export const getUsers = (state) => {
  return state.users;
};

export const getCurrentUser = (state) => {
  return state.current_user;
};
export const getCurrentUserName = (state) => {
  return state.current_user_name;
};
export const getCommentsByID = (state) => {
  console.log(state.comments);
  return state.comments;
};
export const getCategoryById = (state) => {
  console.log("In reducers... categories by id");
  return state.categoryById[0];
};
export const getGenreById = (state) => {
  console.log("In reducers... genres by id");
  return state.genreById[0];
};
export const getLanguageById = (state) => {
  console.log("In reducers... languages by id");
  return state.languageById[0];
};
export const getPostsCount=(state)=>{
  console.log(`Posts Count is ${state.postsCount}`)
  return state.postsCount
}
export const getAllComments=(state)=>{
  console.log(`Comments are ${state.commentsAll}`)
  return state.commentsAll
}