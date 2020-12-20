const mongoose = require("mongoose");

const CompanySchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
    lowercase: true,
    min: 2,
    max: 255
  },
  Description: {
    type: String,
    required: true,
    min: 2,
    max: 255
  },
  Logo: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Companies", CompanySchema);