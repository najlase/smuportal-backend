const myApplication = require("../models/myApplication");

function ApplicationService() {
    //async function getApplication() {
    //  return Application.find({})
    //}
  
    async function newApplication(student, internship, file) {
      return Application.create({StdID: student, InternshipID: internship , Files: file })
    }
  
    return {
      //getApplication,
      newApplication,
    }
  }
  module.exports = myApplicationService;