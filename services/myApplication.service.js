const myApplication = require("../models/MyApplication");


function myApplicationService() {
    //async function getApplication() {
    //  return Application.find({})
    //}

    async function addApplication(internshipData) {
      let application = new myApplication(internshipData);
      return application.save();
    }

    async function updateApplicationStatus(id,status){
      return myApplication.findByIdAndUpdate(id, {Status:status});
    }
    
    async function getApplication() {
      return myApplication.find();
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
      deleteApplication
    }
  }
  module.exports = myApplicationService;