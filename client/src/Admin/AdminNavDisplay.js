import React from "react";

import { Link } from "react-router-dom";

const AdminNavDisplay = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-custom">
      <div className="container">
        <a href="#" className="navbar-brand" style={{color:"white"}}>Admin</a>
        <div className="d-flex ml-auto">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#globalNavbarAdmin"
            aria-controls="globalNavbarAdmin"
            aria-expanded="false"
            aria-label="Toggle Navigation"
          >
            <span className="navbar-light navbar-toggler-icon"></span>
          </button>
        </div>
        <div className="collapse navbar-collapse" id="globalNavbarAdmin">
          <ul className="navbar-nav mr-auto order-1">
            <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
              <Link to="/admin/show-categories" className="nav-link">
                Show Categories
              </Link>
            </li>

            <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
              <Link to="/admin/show-genres" className="nav-link">
                Show Genres
              </Link>
            </li>
            <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
              <Link to="/admin/show-languages" className="nav-link">
                Show Languages
              </Link>
            </li>
            <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
              <Link to="/admin/show-users" className="nav-link">
                Show Users
              </Link>
            </li>
            <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
              <Link to="/admin/show-posts" className="nav-link">
                Show Posts
              </Link>
            </li>
            <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
              <Link to="/admin/show-comments" className="nav-link">
                Show Comments
              </Link>
            </li>
            <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
              <Link to="/admin/add-category" className="nav-link">
                Add Category
              </Link>
            </li>
            <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
              <Link to="/admin/add-genre" className="nav-link">
                Add Genre
              </Link>
            </li>
            <li className="nav-item"  data-toggle="collapse" data-target=".navbar-collapse.show">
              <Link to="/admin/add-language" className="nav-link">
                Add Language
              </Link>
            </li>
            <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
              <Link to="/admin/add-post" className="nav-link">
                Add Movie Review
              </Link>
            </li>
            <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
              <Link to="/admin/add-user" className="nav-link">
                Add User
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavDisplay;
