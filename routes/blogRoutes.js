const express = require("express");
const blogController = require("./../controllers/blogController");
const blogRouter = express.Router();

blogRouter
  .route("/")
  .get(blogController.getAllBlogs)
  .post(blogController.createBlog);

blogRouter
  .route("/:blogId")
  .get(blogController.getBlog)
  .patch(blogController.updateBlog)
  .delete(blogController.deleteBlog);

module.exports = blogRouter;
