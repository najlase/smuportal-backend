const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
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
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
    min: 6,
    max: 255
  },
  emailConfirmationSentOn: {
    type: Date
  },
  emailConfirmedOn: {
    type: Date
  },
  emailConfirmed: {
    type: Boolean,
    default: false
  },
  password: {
    type: String,
    required: true,
    min: 6,
    max: 1024
  },
  avatar: {
    type: String
  },
  enabled: {
    type: Boolean,
    default: false
  },
  registeredOn: {
    type: Date,
    default: Date.now
  },
  twoFactorEnabled: {
    type: Boolean,
    default: false
  },
  twoFactorType: {
    type: String,
    lowercase: true,
    enum: ["app", "email", "none"],
    default: "none"
  },
  lastLogin: {
    type: Date,
    default: Date.now
  },
  twoFactorConfirmed: {
    type: Boolean,
    default: false
  },
  twoFactorSecret: {
    type: String
  },
  _roleId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Role"
  },
  starredInternships: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Internships"
  }]
});

module.exports = mongoose.model("User", userSchema);
