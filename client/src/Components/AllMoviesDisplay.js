import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import { fetchMovies } from "../Actions/fetch";
import { getMovies, getDataPending,getPostsCount } from "../Reducers/reducer";
import Pagination from "react-js-pagination";
import "../css/Movies.css";

const AllMoviesDisplay = (props) => {
  const { movies, fetchMovies, pending, count } = props;
  const [activePage, setPage]=useState(1)
  const [search, setSearch]=useState(null)
  useEffect(() => {
    async function fetchData() {
      // const movies = await axios("http://localhost:8000/movies");
      fetchMovies(1,5);
    }
    fetchData();
  }, []);
  const handlePageChange=(pageNumber)=>{
    console.log("Page change")
    console.log(pageNumber)
    fetchMovies(pageNumber,5)
    setPage(pageNumber)
  }
  const searchSpace=(event)=>{
    let keyword = event.target.value;
    setSearch(keyword)
  }
  // return {pending ? (
  //   <div style={{ textAlign: "center" }}>
  //     <Loader type="Grid" color="#00BFFF" height={100} width={100} />
  //   </div>
  // ) : (
  const posts=movies.filter((data)=>{
    if(search == null)
        
        return data
    else if(data.movieName.toLowerCase().includes(search.toLowerCase())){
        return data
    }
  }).map((movie) => {
      return (<div className="post_movie">
        <a href="#">
          <img src={movie.movieImg} alt="img" border="0" />
        </a>
        <h2 style={{fontStyle:"italic"}}>
          <Link to={`/movie/:${movie._id}`}>{movie.movieName}</Link>
        </h2>
      </div>
      )
  })

  return (
   
      <div>
        <form className="form-inline form-navbar my-2 my-lg-0 order-2">
        <input type="text" placeholder="Search by Movie Name"  onChange={searchSpace} className="form-control col-md-4 offset-md-8"/>
        </form>
      
      {pending ? (
    <div style={{ textAlign: "center" }}>
      <Loader type="Grid" color="#00BFFF" height={100} width={100} />
    </div>):(posts.length!==0?posts:<h6 style={{color:'blue', fontStyle:"italic", paddingTop:"10px"}}>No Search Results Found</h6>)}
      <div className="col-12">
    {movies.length>0?
   
    <Pagination
         activePage={activePage}
         totalItemsCount={count}
         onChange={handlePageChange}
         itemClass="page-item"
linkClass="page-link"
itemsCountPerPage={5}
          
          pageRangeDisplayed={1000}
         />:""}
    
    </div>
      </div>
    )
      
  
};
const mapStateToProps = (state) => ({
  movies: getMovies(state),
  pending: getDataPending(state),
  count:getPostsCount(state)
});
const mapDispatchToProps = {
  fetchMovies,
};

export default connect(mapStateToProps, mapDispatchToProps)(AllMoviesDisplay);
