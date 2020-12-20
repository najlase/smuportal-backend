const Internship = require("../models/Internship");
const mongoose = require("mongoose");
const Company = require("../models/Company")

class InternshipService {
  async getInternships() {
    return Internship.find({IsArchived: false}).populate({ path: 'Company', model: Company });
  }

  async getAllInternships() {
    return Internship.find().populate({ path: 'Company', model: Company });
  }

  async createInternship(internshipData) {
    internshipData.Company = mongoose.Types.ObjectId(internshipData.Company._id);
    internshipData.IsArchived = false;
    const internship = new Internship(internshipData);
    return internship.save();
  }

  async updateInternship(id, internshipData) {
    if (internshipData.Company)
      internshipData.Company = mongoose.Types.ObjectId(internshipData.Company._id);

    internshipData.IsArchived = false;
    return Internship.update({ _id: id }, internshipData, { multi: true });
  }

  async archiveInternship(id) {
    return Internship.update({ _id: id }, {IsArchived: true}, { multi: true });
  }

  async restoreInternship(id) {
    return Internship.update({ _id: id }, {IsArchived: false}, { multi: true });
  }

  async deleteInternship(id) {
    return Internship.deleteOne({ _id: id });
  }
}

module.exports = new InternshipService();
