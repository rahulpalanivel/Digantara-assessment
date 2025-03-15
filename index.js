const express = require("express");
const connectdb = require("./config/dbConnection");

const algorithmRoute = require("./routes/algorithmRoute");

const errorHandler = require("./middleware/errorHandler");
const invalidRoutes = require("./middleware/invalidRoute");

const app = express();
const Port = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//To establish database connection
connectdb();

//Route to API's
app.use("/api/algorithm", algorithmRoute);

//Error Handling
app.use(invalidRoutes);
app.use(errorHandler);

app.listen(Port, () => console.log("Server running on port 8080"));
