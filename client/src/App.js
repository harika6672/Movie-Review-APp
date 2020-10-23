import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import "./App.css";
import MovieDetailsForm from "./Admin/MovieDetailsForm";
import AddCategory from "./Admin/AddCategory";
import AddGenre from "./Admin/AddGenre";
import AddLanguage from "./Admin/AddLanguage";
import AddUser from "./Admin/AddUser";
import AllMoviesDisplay from "./Components/AllMoviesDisplay";
import MovieDisplay from "./Components/MovieDisplay";
import AdminNavDisplay from "../src/Admin/AdminNavDisplay";
import Navbar from "./Components/NavDisplay";
import GenreSpecific from "./Components/GenreSpecific";
import CategorySpecific from "./Components/CategorySpecific";
import LanguageSpecific from "./Components/LanguageSpecific";
import SignOut from "./Components/SignOut";
import GoogleSignIn from "./Components/GoogleSignIn";
import SignUp from "./Components/SignUp";
import ShowCategories from "../src/Admin/ShowCategories";
import ShowGenres from "../src/Admin/ShowGenres";
import ShowLanguages from "../src/Admin/ShowLanguages";
import ShowPosts from "../src/Admin/ShowPosts";
import SignInHome from "./Components/SignInHome";
import SignUpHome from "./Components/SignUpHome";
import GoogleSignUp from "./Components/GoogleSignUp";
import SignIn from "./Components/SignIn";
import UpdateCategory from "../src/Admin/UpdateCategory";
import UpdateGenre from "./Admin/UpdateGenre";
import UpdateLanguage from "./Admin/UpdateLanguage";
import UpdatePost from "./Admin/UpdatePost";
import { getRole } from "./Reducers/reducer";
import ShowUsers from "./Admin/ShowUsers";

function App() {
  return (
    <div className="App container">
      <h3 id="title-header">Movie Review</h3>
      <Router>
        <Navbar />

        <Route path="/" exact component={AllMoviesDisplay} />
        <Route path="/ways/signin" component={SignInHome} />
        <Route path="/google-signup" component={GoogleSignUp} />
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
        <Route path="/ways/signup" component={SignUpHome} />
        <Route path="/allmovies" component={AllMoviesDisplay} />
        <Route path="/movie-view/:id" component={MovieDisplay} />
        <Route path="/genre/:gname" component={GenreSpecific} />
        <Route path="/language/:lname" component={LanguageSpecific} />
        <Route path="/category/:cname" component={CategorySpecific} />
        <Route path="/movieform" component={MovieDetailsForm} />
        <Route path="/signout" component={SignOut} />

        <Route path="/admin/show-categories" component={ShowCategories} />
        <Route path="/admin/show-languages" component={ShowLanguages} />
        <Route path="/admin/show-genres" component={ShowGenres} />
        <Route path="/admin/show-posts" component={ShowPosts} />
        <Route path="/admin/show-users" component={ShowUsers} />
        <Route path="/admin/add-category" component={AddCategory} />
        <Route path="/admin/add-genre" component={AddGenre} />
        <Route path="/admin/add-language" component={AddLanguage} />
        <Route path="/admin/add-post" component={MovieDetailsForm} />
        <Route path="/admin/add-user" component={AddUser} />
        <Route path="/admin/update-category/:c_id" component={UpdateCategory} />
        <Route path="/admin/update-genre/:g_id" component={UpdateGenre} />
        <Route path="/admin/update-language/:l_id" component={UpdateLanguage} />
        <Route path="/admin/update-post/:p_id" component={UpdatePost} />
      </Router>
    </div>
  );
}
const mapStateToProps = (state) => ({
  isAdmin: getRole(state),
});

export default connect(mapStateToProps, null)(App);
