const Apllication = require("../models/Application");
function ApplicationService() {
    async function getApplication() {
      return Application.find({})
    }
  
    async function newApplication(student, internship, date) {
      return Application.create({StdID: student, InternshipID: internship , AppliedOn: date})
    }
  
    return {
      getApplication,
      newApplication,
    }
  }
  module.exports = ApplicationService;