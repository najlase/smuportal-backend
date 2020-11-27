const myApplication = require("../models/MyApplication");

function myApplicationService() {
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