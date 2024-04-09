const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

//to connect to the database
const connectDB = async () => {
  try {
    const DBURL = process.env.DB_LINK;
    const conn = await mongoose.connect(DBURL);
    console.log(`Database connected successfully`);
  } catch (error) {
    console.log("Error while connecting to the database", error.message);
  }
};

module.exports = connectDB;
