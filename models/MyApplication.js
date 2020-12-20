const mongoose = require("mongoose");

const MyApplicationSchema = new mongoose.Schema({
UserID: {
  type: mongoose.Schema.Types.ObjectId,
  required: true,
  unique:false,
  ref: "User"
},
InternshipID: {
  type: mongoose.Schema.Types.ObjectId,
  required: true,
  ref: "Internships"
},
Files: {
    type: String,
    data: Buffer
  },
AppliedOn: {
    type: Date,
    default:Date.now
  },
Valid:{
    type: String,
    lowercase: true,
    enum: ["valid", "invalid","none"],
    default: "none"
},
Status:{
    type: String,
    lowercase: true,
    enum: ["pending", "submitted to company", "received by company"],
    default: "pending"
}
});

module.exports = mongoose.model("MyApplication", MyApplicationSchema);