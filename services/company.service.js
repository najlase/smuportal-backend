const Company = require("../models/Company");
const mongoose = require("mongoose");

class CompanyService {
  async getCompanys() {
    return Company.find({});
  }

  async createCompany(companyData) {
    const company = new Company(companyData);
    return company.save();
  }

  async updateCompany(id, companyData) {
    return Company.update({ _id: id }, companyData, { multi: true });
  }

  async deleteCompany(id) {
    return Company.deleteOne({ _id: id });
  }
}

module.exports = new CompanyService();
