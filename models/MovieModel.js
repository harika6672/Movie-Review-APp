const mongoose = require("mongoose");
const movieSchema = new mongoose.Schema({
  movieName: {
    type: String,
    required: [true, "Must have name"],
    unique: true,
    trim: true,
  },
  movieCast: {
    type: String,
    required: [true, "Tour must have duration"],
  },
  movieImg: {
    data: Buffer,
    contentType: String,
  },
  genre: {
    type: String,
  },
  language: {
    type: String,
  },
  category: {
    type: String,
  },
  summary: {
    type: String,
    trim: true,
    required: [true, "A tour must have a description"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
