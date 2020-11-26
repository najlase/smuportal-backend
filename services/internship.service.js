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

  async updateInternship(id, internshipData) {
    if (internshipData.Company)
      internshipData.Company = mongoose.Schema.Types.ObjectId(internshipData.Company);

    let internship = await Internship.update({ _id: id }, internshipData, { multi: true });
    return internship;
  }

  async deleteInternship(id) {
    await Internship.deleteOne({ _id: id });
  }
}

module.exports = new InternshipService();
