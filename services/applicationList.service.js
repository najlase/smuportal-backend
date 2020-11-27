const ApplicationList = require("../models/ApplicationList");

function ApplicationService() {
    async function getApplicationById(id) {
    return Application.findById(id);
    }
  
  
    return {
      getApplicationById,
    }
  }
  module.exports = ApplicationListService;