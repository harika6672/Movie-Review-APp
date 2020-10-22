const mongoose = require("mongoose");
const commentSchema = new mongoose.Schema({
  post_id: {
    type: String,
    required: [true, "Must have Post ID"],
  },
  
  
  role: {
    type: String,
    required: [true, "Must have role defined"],
  },
  comment: {
    type: String,
    required: [true, "Must have Comment"],
  },
  user: {
    type: String,
    required: [true, "Must have User details"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
