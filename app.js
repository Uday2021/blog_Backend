const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const blogRouter = require("./routes/blogRoutes");
const authRouter = require("./routes/authRoutes");
const commentRouter = require("./routes/commentRoutes");

connectDB();

const app = express();
app.use(cors());
app.use(express.json());

//ROUTES
app.use("/blogs", blogRouter);
app.use("/users", authRouter);
app.use("/comments", commentRouter);

const port = process.env.PORT || 3001;
app.listen(port, (err) => {
  if (err) return err;
  console.log(`server is running on ${port}`);
});
