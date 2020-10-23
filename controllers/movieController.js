const fs = require("fs");
const Movie = require("../models/MovieModel");

exports.movieController = async (req, res) => {
  try {
    const newmovie = req.body;

    const movies = {
      ...newmovie,
      movieImg: {
        data: fs.readFileSync(req.file.path),
        contentType: req.file.mimetype,
      },
    };
    console.log(movies);
    const newMovie = await Movie.create(movies);
    console.log(newMovie);
    res.status(201).json({
      status: "success",
      data: {
        movie: newMovie,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
exports.getmovieController = async (req, res) => {
  var pageNo = parseInt(req.query._page)
  var size = parseInt(req.query._limit)
  if(pageNo < 0 || pageNo === 0) {
        response = {"error" : true,"message" : "invalid page number, should start with 1"};
        return res.json(response)
  }
  var skip = size * (pageNo - 1)
  var limit = size
  
  try {
    const count=await Movie.count()
    const movies = await Movie.find().limit(limit).skip(skip)
    console.log(movies)
    res.status(200).json({
      status: "success",
      data: {
        movies,
        count
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
exports.getmovieByIDController = async (req, res) => {
  console.log("movie by id")
  console.log(req.params.id);
  let id=req.params.id
  if(req.params.id[0]===":"){
     id=(req.params.id).slice(1);
     console.log(`on reload id is ${id}`)
  }
  try {
    const movie = await Movie.find({ _id: id });
    res.status(200).json({
      status: "success",
      data: {
        movie,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
exports.updatemovieController = async (req, res) => {
  console.log("In update movie controller");
  const id = req.params.id;
console.log( req.params.id);
   console.log(req.body.category)

  try {
    const updated_movie = await Movie.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    console.log(updated_movie);
    res.status(200).json({
      status: "success",
      data: {
        updated_movie,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getmovieByGenreController = async (req, res) => {
  console.log(req.params.id);
  try {
    console.log("In Handler");
    const genreSpecific = await Movie.find({ genre: req.params.genre });
    console.log(genreSpecific);
    res.status(200).json({
      status: "success",
      data: { genreSpecific },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
exports.getmovieByLanguageController = async (req, res) => {
  console.log(req.params);
  try {
    console.log("In Handler");
    const languageSpecific = await Movie.find({
      language: req.params.language,
    });
    console.log(languageSpecific);
    res.status(200).json({
      status: "success",
      data: { languageSpecific },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
exports.getmovieByCategoryController = async (req, res) => {
  console.log(req.params);
  try {
    console.log("In Handler");
    const categorySpecific = await Movie.find({
      category: req.params.category,
    });
    console.log(categorySpecific);
    res.status(200).json({
      status: "success",
      data: { categorySpecific },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
exports.deletemovieController = async (req, res) => {
  console.log("In delete");
  const id = req.params.id;
  console.log(id);
  try {
    const delete_movie = await Movie.findByIdAndDelete(id);
    console.log(delete_movie);
    res.status(200).json({
      status: "success",
      data: {
        delete_movie,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
