const express = require("express");
const connectdb = require("./config/dbConnection");

const app = express();

connectdb();

app.get("/", (req, res) => {
  res.status(200), res.send("Hello");
});

app.listen(8080, () => console.log("Server running on port 8080"));
