const Internship = require("../models/Internships");

function InternshipService() {
    async function getInternships() {
      return Internship.find({});
    }

    return {getInternships};
}

module.exports = InternshipService;
