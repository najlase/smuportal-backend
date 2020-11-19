const mongoose = require("mongoose");

const CcSchema = new mongoose.Schema({
Status: {
    type: String,
    required: true,
    lowercase: true,
    min: 2,
    max: 255
  },
CcID: {
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

  Validation: {
    type: String,
    required: true,
    wercase: true,
    min: 2,
    max: 255
  },
});

module.exports = mongoose.model("Cc", CcSchema);