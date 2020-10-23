import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from 'react-router-dom';
import { Link } from "react-router-dom";
import { fetchGenres, fetchLanguages, fetchCategories } from "../Actions/fetch";
import AdminNavDisplay from "../Admin/AdminNavDisplay";
import {
  getGenres,
  getLanguages,
  getCategories,
  getAuthValue,
  getRole,
} from "../Reducers/reducer";
import "../css/Navbar.css";

// import axios from "axios";
// import { Link, to } from "react-router-dom";
const Navbar = (props) => {
  // const [langs, setLang] = useState([]);
  // const [genres, setGenre] = useState([]);
  // const [categories, setCategory] = useState({});
  const [user, setUser] = useState(" ");
  const [adminNav, setAdminNav] = useState(false);
  const history = useHistory();
  const {
    fetchGenres,
    fetchLanguages,
    fetchCategories,
    genres,
    languages,
    categories,

   
  } = props;
  // let { isAuth } = props;
  let user_stored = localStorage.getItem("user_stored") || " ";
  let user_access = localStorage.getItem("access") || " ";
  const clearValues = () => {
    history.push('/')
    localStorage.removeItem("user_stored");
    localStorage.removeItem("access");
    window.location.reload();
    
  };

  useEffect(() => {
    
    fetchGenres();
    fetchLanguages();
    fetchCategories();
    setUser(user_stored);
  }, [user]);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-custom">
        <div className="container">
          <a href="#" className="navbar-brand"></a>
          <div className="d-flex ml-auto">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#globalNavbar"
              aria-controls="globalNavbar"
              aria-expanded="false"
              aria-label="Toggle Navigation"
            >
              <span className="navbar-light navbar-toggler-icon"></span>
            </button>
          </div>
          <div className="collapse navbar-collapse" id="globalNavbar">
            {/* <form className="form-inline form-navbar my-2 my-lg-0 order-2">
              <input
                className="form-control"
                name="s"
                type="text"
                placeholder="Search"
              />
              {console.log(user)}
            </form> */}
            <ul className="navbar-nav mr-auto order-1">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarDropdownMenuLink"
                  href="#"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Genres
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <div className="navbar-collapse navbar-top-collapse">
                    <ul className="nav navbar-nav">
                      {genres.map((genre) => (
                        <li key={genre._id}>
                          <Link to={`/genre/:${genre.genre}`}>
                            {genre.genre}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarDropdownMenuLink"
                  href="#"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Languages
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <div className="navbar-collapse navbar-top-collapse">
                    <ul className="nav navbar-nav">
                      {languages.map((lang) => (
                        <li key={lang._id}>
                          <Link to={`/language/:${lang.language}`}>
                            {lang.language}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarDropdownMenuLink"
                  href="#"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Categories
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <div className="navbar-collapse navbar-top-collapse">
                    <ul className="nav navbar-nav">
                      {categories.map((category) => (
                        <li key={category._id}>
                          <Link to={`/category/:${category.category}`}>
                            {category.category}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home 
                </Link>
              </li>
              <li
                className="nav-item"
                style={
                  user_access === "admin" || user_access==="Admin"
                    ? { display: "block" }
                    : { display: "none" }
                }
              >
                <a
                  href="#"
                  onClick={() => setAdminNav(true)}
                  className="nav-link"
                >
                  Admin
                </a>

                {/* <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <div className="navbar-collapse navbar-top-collapse">
                  <ul className="nav navbar-nav">
                    <li>
                      <Link to="/admin/add-category">Add Category</Link>
                    </li>
                    <li>
                      <Link to="/admin/add-genre">Add Genre</Link>
                    </li>
                    <li>
                      <Link to="/admin/add-language">Add Language</Link>
                    </li>
                    <li>
                      <Link to="/admin/add-post">Add Movie Review</Link>
                    </li>
                    <li>
                      <Link to="/admin/add-user">Add User</Link>
                    </li>
                  </ul>
                </div>
              </div> */}
              </li>
            </ul>
            <ul className="navbar-nav d-none d-lg-flex ml-2 order-3">
              <li
                className="nav-item"
                style={
                  user_stored === " "
                    ? { display: "block" }
                    : { display: "none" }
                }
              >
                <Link to={{
    pathname: "/ways/signin",
    state: { fromModal: false }
  }} className="nav-link">
                  Sign in
                </Link>
              </li>
              <li
                className="nav-item"
                style={
                  user_stored === " "
                    ? { display: "block" }
                    : { display: "none" }
                }
              >
                <Link to="/ways/signup" className="nav-link">
                  Sign up
                </Link>
              </li>
              <li
                className="nav-item"
                style={
                  user_stored !== " "
                    ? { display: "block" }
                    : { display: "none" }
                }
              >
                <Link to="/" className="nav-link" onClick={clearValues}>
                  Sign Out
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav d-lg-none">
              <li className="nav-item-divider"></li>
              <li className="nav-item">
                <Link
                  to={{
                    pathname: "/ways/signin",
                    state: { fromModal: false }
                  }}
                  className="nav-link"
                  style={
                    user_stored === " "
                      ? { display: "block" }
                      : { display: "none" }
                  }
                >
                  Sign in
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/ways/signup"
                  className="nav-link"
                  style={
                    user_stored === " "
                      ? { display: "block" }
                      : { display: "none" }
                  }
                >
                  Sign up
                </Link>
              </li>
              <li
                className="nav-item"
                style={
                  user_stored !== " "
                    ? { display: "block" }
                    : { display: "none" }
                }
              >
                <Link to="/" className="nav-link" onClick={clearValues}>
                  Sign Out
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {adminNav ? <AdminNavDisplay /> : ""}
    </>
  );
};
//  export default Navbar;
const mapStateToProps = (state) => ({
  genres: getGenres(state),
  languages: getLanguages(state),
  categories: getCategories(state),
  isAuth: getAuthValue(state),
  isAdmin: getRole(state),
});
const mapDispatchToProps = {
  fetchGenres,
  fetchCategories,
  fetchLanguages,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
