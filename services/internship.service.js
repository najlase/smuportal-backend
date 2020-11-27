const Internship = require("../models/Internship");
const mongoose = require("mongoose");

class InternshipService {
  async getInternships() {
    return Internship.find({});
  }

  async createInternship(internshipData) {
    internshipData.Company = mongoose.Schema.Types.ObjectId(internshipData.Company);
    const internship = new Internship(internshipData);
    return internship.save();
  }

  async updateInternship(id, internshipData) {
    if (internshipData.Company)
      internshipData.Company = mongoose.Schema.Types.ObjectId(internshipData.Company);

    return Internship.update({ _id: id }, internshipData, { multi: true });
  }

  async deleteInternship(id) {
    return Internship.deleteOne({ _id: id });
  }
}

module.exports = new InternshipService();
