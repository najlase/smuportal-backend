const ApplicationList = require("../models/ApplicationList");
const mongoose = require("mongoose");

function ApplicationListService() {
    async function getApplication() {
    return ApplicationList.find();
    }
  

    return {
      getApplication
    }
  }
  module.exports = ApplicationListService;