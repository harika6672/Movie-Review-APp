const express = require("express");
const genreRouter = express.Router();
const controller = require("../controllers/genreController");

genreRouter
  .route("/")
  .post(controller.genreController)
  .get(controller.getgenreController);
genreRouter
  .route("/:g_id")
  .get(controller.getgenreByIdController)
  .patch(controller.updategenreController)
  .delete(controller.deletegenreController);
module.exports = genreRouter;
