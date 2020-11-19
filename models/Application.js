const mongoose = require("mongoose");

const ApplicationSchema = new mongoose.Schema({
Files: {
    type: String,
    data: Buffer
  },
AppliedOn: {
    type: Date,
    default:Date.now
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
    lowercase: true,
    min: 2,
    max: 255
  },
});

module.exports = mongoose.model("Application", ApplicationSchema);