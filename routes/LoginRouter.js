const express = require("express");
const loginRouter = express.Router();
const controller = require("../controllers/loginController");

loginRouter.route("/googlelogin").post(controller.loginController);
loginRouter
  .route("/")
  .post(controller.signUpController)
  .get(controller.getUsersController);
loginRouter.route("/:id").delete(controller.deleteuserController);

module.exports = loginRouter;
