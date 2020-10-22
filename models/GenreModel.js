const mongoose = require("mongoose");
const genreSchema = new mongoose.Schema({
  genre: {
    type: String,
    required: [true, "Must have name"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
});

const Genre = mongoose.model("Genre", genreSchema);

module.exports = Genre;
