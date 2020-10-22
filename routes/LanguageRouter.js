const express = require("express");
const languageRouter = express.Router();
const controller = require("../controllers/languageController");

languageRouter
  .route("/")
  .post(controller.languageController)
  .get(controller.getlanguageController);
languageRouter
  .route("/:l_id")
  .get(controller.getlanguageByIdController)
  .patch(controller.updatelanguageController)
  .delete(controller.deletelanguageController);
module.exports = languageRouter;
