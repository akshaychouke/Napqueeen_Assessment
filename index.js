const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db.js");
const blogRouter = require("./routes/postRoutes.js");
dotenv.config();

const app = express();
connectDB();

app.use(express.json());
app.use(cors());
app.use("/api/posts", blogRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server started at port ${process.env.PORT}`);
});
