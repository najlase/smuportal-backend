const mongoose = require("mongoose");

const MyApplicationSchema = new mongoose.Schema({
firstName: {
  type: String,
  required: true,
  lowercase: true,
  min: 2,
  max: 255
},
lastName: {
  type: String,
  required: true,
  lowercase: true,
  min: 2,
  max: 255
},
universityID: {
  type: Number,
  unique: true,
  required: true,
  min: 1000000,
  max: 9999999,
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
Files: {
    type: String,
    data: Buffer
  },
AppliedOn: {
    type: Date,
    default:Date.now
  },
});

module.exports = mongoose.model("MyApplication", MyApplicationSchema);