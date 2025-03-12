const express = require("express");
const connectdb = require("./config/dbConnection");

const algorithmRoute = require("./routes/algorithmRoute");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/algorithm", algorithmRoute);

connectdb();

app.listen(8080, () => console.log("Server running on port 8080"));
