const express = require("express");
const commentRouter = express.Router();
const controller = require("../controllers/commentController.js");

commentRouter.route("/").post(controller.commentController);
commentRouter.route("/:id").get(controller.getcommentController);

module.exports = commentRouter;
