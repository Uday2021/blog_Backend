const mongoose = require("mongoose");
const Blog = require("./blogModel");

const commentSchema = new mongoose.Schema(
  {
    author: {
      type: String,
      required: [true, "comment must have an author"],
    },
    description: {
      type: String,
      required: [true, "A comment must have an description"],
    },
    createdAt: {
      type: Date,
      default: new Date(Date.now()),
    },
    like: Number,
    blog: {
      type: mongoose.Schema.ObjectId,
      ref: "Blog",
      required: [true, "Review must belong to a blog."],
    },
    //   user: {
    //     type: mongoose.Schema.ObjectId,
    //     ref: "User",
    //     required: [true, "comment must belong to a user"],
    //   },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Comment = new mongoose.model("comment", commentSchema);

module.exports = Comment;
