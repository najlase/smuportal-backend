const mongoose = require("mongoose");
const ApplicationListSchema = new mongoose.Schema({
    _ApllicationId: [
        {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: "MyApplication"
        }
    ],
    //Validation
    Valid:{
        type: String,
        lowercase: true,
        enum: ["valid", "invalid","none"],
        default: "none"
    },
    //Status
    Status:{
        type: String,
        lowercase: true,
        enum: ["pending", "submitted to company", "received by company"],
        default: "pending"
    }
});
module.exports = mongoose.model("ApplicationList", ApplicationListSchema);