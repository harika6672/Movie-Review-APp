const Comment = require("../models/CommentModel");
const Movie = require("../models/MovieModel");
exports.commentController = async (req, res) => {
  try {
    const newComment = await Comment.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        comment: newComment,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
exports.getcommentController = async (req, res) => {
  try {
    console.log(req.params);
    const movie = await Movie.find({ _id: req.params.id });
    const movieName=movie[0]["movieName"]
    const comments = await Comment.find({ post_id: movieName });

    res.status(200).json({
      status: "success",
      data: {
        comments,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
