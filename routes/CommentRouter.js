const express = require("express");
const commentRouter = express.Router();
const controller = require("../controllers/commentController.js");

commentRouter.route("/").post(controller.commentController).get(controller.getAllcommentController);
commentRouter.route("/:id").get(controller.getcommentController).delete(controller.deletecommentController);

module.exports = commentRouter;
