const mongoose = require("mongoose");

const internshipSchema = new mongoose.Schema({
  Domain: {
    type: String,
    required: true,
    lowercase: true,
    min: 2,
    max: 255
  },
  Location: {
    type: String,
    required: true,
    lowercase: true,
    min: 2,
    max: 255
  },
  Duration: {
    type: String,
    required: true,
    lowercase: true,
    min: 2,
    max: 255
  },
  Duration: {
    type: Date,
    required: true,
    lowercase: true,
    min: 2,
    max: 255
  },
  ID: {
    type: Number,
    unique: true,
    required: true,
    min: 1000000000,
    max: 9999999999999,
    validate: {
      validator: Number.isInteger,
      message: "{VALUE} is not an integer value"
    }
  },

});

module.exports = mongoose.model("Internships", IntershipsSchema);