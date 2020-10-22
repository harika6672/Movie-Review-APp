import { fetchMovieByID } from "../Actions/fetch";
import {
  getMovieByID,
  getAuthValue,
  getRole,
  getCurrentUser,
} from "../Reducers/reducer";
export const mapStateToProps = (state) => ({
  movie: getMovieByID(state),
  isAuth: getAuthValue(state),
  isAdmin: getRole(state),
  user: getCurrentUser(state),
});
export const mapDispatchToProps = {
  fetchMovieByID,
};
