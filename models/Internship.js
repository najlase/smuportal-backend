const mongoose = require("mongoose");

const IntershipSchema = new mongoose.Schema({
  Domain: {
    type: String,
    required: true,
    lowercase: true,
    min: 2,
    max: 255
  },
 Company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Company',
    required: false,
    },
  Description: {
    type: String,
    required: true,
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
  Deadline: {
    type: Date,
    required: true,
  },

});

module.exports = mongoose.model("Internship", IntershipSchema);