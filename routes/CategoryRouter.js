const express = require("express");
const categoryRouter = express.Router();
const controller = require("../controllers/categoryController");

categoryRouter
  .route("/")
  .post(controller.categoryController)
  .get(controller.getcategoryController);

categoryRouter
  .route("/:c_id")
  .get(controller.getcategoryByIdController)
  .patch(controller.updatecategoryController)
  .delete(controller.deletecategoryController);
module.exports = categoryRouter;
