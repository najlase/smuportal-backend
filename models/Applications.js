const mongoose = require("mongoose");

const ApplicationsSchema = new mongoose.Schema({
Files: {
    type: file,
    required: true,
    lowercase: true,
    min: 2,
    max: 255
  },
AppliedOn: {
    type: Date,
    required: true,
    lowercase: true,
    min: 2,
    max: 255
  },
StdID: {
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
InternshipID: {
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

  Status: {
    type: String,
    required: true,
    wercase: true,
    min: 2,
    max: 255
  },
});

module.exports = mongoose.model("Applications", ApplicationsSchema);