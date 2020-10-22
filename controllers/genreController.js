const Genre = require("../models/GenreModel");
exports.genreController = async (req, res) => {
  try {
    const newGenre = await Genre.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        genre: newGenre,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
exports.getgenreController = async (req, res) => {
  try {
    const genres = await Genre.find();

    res.status(200).json({
      status: "success",
      data: {
        genres,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getgenreByIdController = async (req, res) => {
  try {
    const genre = await Genre.find({ _id: req.params.g_id });
    res.status(200).json({
      status: "success",
      data: {
        genre,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.updategenreController = async (req, res) => {
  const id = req.params.g_id;
  const updateObject = req.body;
  try {
    const updated_genre = await Genre.findByIdAndUpdate(id, updateObject, {
      new: true,
    });
    res.status(200).json({
      status: "success",
      data: {
        updated_genre,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
exports.deletegenreController = async (req, res) => {
  console.log("In delete");
  const id = req.params.g_id;
  console.log(id);
  try {
    const delete_genre = await Genre.findByIdAndDelete(id);
    console.log(delete_genre);
    res.status(200).json({
      status: "success",
      data: {
        delete_genre,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
