const ApplicationList = require("../models/ApplicationList");

function ApplicationListService() {
    async function getApplication() {
    return Application.find();
    }
  
  
    return {
      getApplication,
    }
  }
  module.exports = ApplicationListService;