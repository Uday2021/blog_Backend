const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://prince:Prince007@blog-project.hqjyp.mongodb.net/MyBlog?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    console.log("MongoDb connection SUCCESS");
  } catch (error) {
    console.log(error);
    console.log("MongoDb connection FAIL");
    process.exit(1);
  }
};

module.exports = connectDB;
