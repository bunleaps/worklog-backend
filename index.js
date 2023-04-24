const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const HoursRoutes = require("./routes/routes");

// Connect to the database
const mongoDB = "mongodb://localhost:27017/hours-and-works";
mongoose.connect(mongoDB, { useNewUrlParser: true });

// Create the Express app
const app = express();

// Set up body parser
app.use(bodyParser.json());

// Set up routes
app.use("/hours", HoursRoutes);

// Start the server
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
