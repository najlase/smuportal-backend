const myApplication = require("../models/MyApplication");
const mongoose = require("mongoose");

function myApplicationService() {
    //async function getApplication() {
    //  return Application.find({})
    //}

    async function addApplication(internshipData) {
      internshipData.UserID = mongoose.Types.ObjectId(internshipData.UserID);
      internshipData.InternshipID = mongoose.Types.ObjectId(internshipData.InternshipID);
      console.log(internshipData);
      let application = new myApplication(internshipData);
      return application.save();
    }

    async function updateApplicationStatus(id,status){
      return myApplication.findByIdAndUpdate(id, {Status:status});
    }
    
    async function getApplication() {
      return myApplication.find();
    }

    async function getApplicationByUserId(userId){
      const query = { UserID: userId };
      return myApplication.find(query);
    }

    async function getApplicationByStatus(status){
      const query = { Status: status };
      return myApplication.find(query);
    }
    
    async function deleteApplication(id) {
      return myApplication.deleteOne({ _id: id });
    }
     
    
  
    return {
      getApplication,
      addApplication,
      getApplicationByStatus,
      updateApplicationStatus,
      deleteApplication,
      getApplicationByUserId
    }
  }
  module.exports = myApplicationService();