const mongoose = require("mongoose");

const IntershipSchema = new mongoose.Schema({
  Title: {
    type: String,
    required: true,
    min: 2,
    max: 100
  },
  Domain: {
    type: String,
    required: true,
    min: 2,
    max: 50
  },
 Company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Companies',
    required: true,
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
    min: 2,
    max: 50
  },
  Duration: {
    type: String,
    required: true,
  },
  Deadline: {
    type: Date,
    required: true,
  },
  IsArchived: {
    type: Boolean,
    required: true,
    default: false
  },
});

module.exports = mongoose.model("Internships", IntershipSchema);