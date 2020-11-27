const ApplicationList = require("../models/ApplicationList");

function ApplicationListService() {
    async function getApplicationById(id) {
    return Application.findById(id);
    }
  
  
    return {
      getApplicationById,
    }
  }
  module.exports = ApplicationListService;