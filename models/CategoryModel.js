const mongoose = require("mongoose");
const categorySchema = new mongoose.Schema({
  category: {
    type: String,
    required: [true, "Must have name"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
