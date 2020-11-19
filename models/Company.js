const mongoose = require("mongoose");

const companySchema = new Schema({
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

export default model("Company", CompanySchema);