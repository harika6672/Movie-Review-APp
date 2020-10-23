const express = require("express");
const multer = require("multer");
const path=require("path")
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '/uploads/'));
  },
  filename: function (req, file, cb) {
    console.log(file.fieldname);
    cb(null, file.fieldname + "-" + Date.now());
  },
});

var upload = multer({ storage: storage });

const movieRouter = express.Router();
const controller = require("../controllers/movieController");

movieRouter.post("/", upload.single("movieImg"), controller.movieController);
movieRouter.route("/").get(controller.getmovieController);
movieRouter
  .route("/:id")
  .get(controller.getmovieByIDController)
  .delete(controller.deletemovieController)
movieRouter.patch("/:id",controller.updatemovieController);
movieRouter.route("/movie/:genre").get(controller.getmovieByGenreController);
movieRouter
  .route("/movieSpecificLang/:language")
  .get(controller.getmovieByLanguageController);
movieRouter
  .route("/movieCategory/:category")
  .get(controller.getmovieByCategoryController);
module.exports = movieRouter;
