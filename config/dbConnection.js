const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const connectdb = async () => {
  try {
    await mongoose.connect(process.env.url);
    console.log("Database connected");
  } catch (err) {
    console.log("Error connecting to Database" + err);
  }
};

module.exports = connectdb;
