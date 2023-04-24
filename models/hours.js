// hours.js

const mongoose = require("mongoose");

// Create the schema for the `hours` model
const hoursSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  hours: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

// Create the `Hours` model
const Hours = mongoose.model("Hours", hoursSchema);

module.exports = Hours;
