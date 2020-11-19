const Internship = require("../models/Internship");
const mongoose = require("mongoose");

class InternshipService {
    async getInternships() {
      return Internship.find({});
    }

    async createInternship(internshipData) {
     internshipData.Company = mongoose.Schema.Types.ObjectId(internshipData.Company);
      const internship = new Internship(internshipData);
      await internship.save();
      return internship;
    }

}

module.exports = new InternshipService();
