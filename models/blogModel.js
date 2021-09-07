const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    author: {
      type: String,
      required: [true, "A bog must have an Author"],
    },
    blogCategory: {
      type: String,
      required: [true, "A must must have a category"],
      enum: {
        values: [
          "Food",
          "Travel",
          "Health and Fitness",
          "Lifestyle",
          "Fashion and Beauty",
          "photography",
          "Music",
          "Business",
          "Art and Design",
          "Sports",
          "Poetry",
          "Movie",
          "Politics",
          "Books",
          "Parenting",
          "DIY",
          "Personal",
        ],
      },
    },
    createdDate: {
      type: Date,
      default: Date.now(),
    },
    blogImage: {
      type: String,
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

blogSchema.virtual("comments", {
  ref: "Comment",
  foreignField: "comment",
  localField: "_id",
});

const Blog = new mongoose.model("Blog", blogSchema);

module.exports = Blog;
