const express = require("express");
const commentController = require("./../controllers/reviewController");
const commentRouter = express.Router();

commentRouter
  .route("/")
  .get(commentController.getAllComments)
  .post(commentController.createComment);

commentRouter
  .route("/:commentId")
  .get(commentController.getComment)
  .patch(commentController.updateComment)
  .delete(commentController.deleteComment);

module.exports = commentRouter;
