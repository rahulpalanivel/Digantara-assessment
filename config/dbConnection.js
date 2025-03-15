const mongoose = require("mongoose");

//Url to access mongodb cluster
const path =
  "mongodb+srv://palanivelrahul45:aqO2Pu70nc6fBH2S@api-logs.hcm7w.mongodb.net/?retryWrites=true&w=majority&appName=API-Logs";
const connectdb = async () => {
  try {
    await mongoose.connect(path);
    console.log("Database connected");
  } catch (err) {
    console.log("Error connecting to Database" + err);
  }
};

module.exports = connectdb;
