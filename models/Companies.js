const mongoose = require("mongoose");

const studentsSchema = new Schema({
  Name: {
    type: String,
    required: true,
    lowercase: true,
    min: 2,
    max: 255
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
});

export default model("Companies", CompaniesSchema);