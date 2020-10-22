const mongoose = require("mongoose");
const languageSchema = new mongoose.Schema({
  language: {
    type: String,
    required: [true, "Must have name"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
});

const Language = mongoose.model("Language", languageSchema);

module.exports = Language;
