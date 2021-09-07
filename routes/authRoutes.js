const express = require("express");
const userRouter = express.Router();
const authController = require("../controllers/authController");

userRouter.route("/signup").post(authController.signup);
userRouter.route("/login").post(authController.login);
userRouter.route("/reset-password/:token").patch(authController.resetPassword);
userRouter.route("/forgetPassword").post(authController.forgetPassword);
userRouter
  .route("/updatePassword/:userId")
  .patch(authController.updatePassword);

module.exports = userRouter;
