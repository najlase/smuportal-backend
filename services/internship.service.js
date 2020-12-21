const Internship = require("../models/Internship");
const mongoose = require("mongoose");
const Company = require("../models/Company");
const User = require("../models/User");

class InternshipService {
  async getInternships() {
    return Internship.find({IsArchived: false}).sort({ $natural: -1 }).populate({ path: 'Company', model: Company });
  }

  async getAllInternships() {
    return Internship.find().sort({ $natural: -1 }).populate({ path: 'Company', model: Company });
  }

  async filterInternships(filterData) {
    let validFilters = {IsArchived: false};

    if(filterData.Title)
      validFilters.Title = {$regex: new RegExp(filterData.Title, "i")}

    if(filterData.Domain)
      validFilters.Domain = filterData.Domain;

    if(filterData.Location)
      validFilters.Location = filterData.Location;

    if(filterData.Deadline)
      validFilters.Deadline = {"$lte": new Date(filterData.Deadline)};

    if(filterData.StartingDate)
      validFilters.StartingDate = {"$lte": new Date(filterData.StartingDate)};

    if(filterData.Duration){
      if(filterData.Duration == "1 Month or less")
        validFilters.Duration = {"$lte": "1 Month"};
      else if(filterData.Duration == "Between 1 and 3 months")
        validFilters.Duration = {"$gt": "1 Month", "$lte": "3 Months"};
      else if(filterData.Duration == "More than 3 months")
        validFilters.Duration = {"$gt": "3 Months"};
    }

    return Internship.find(validFilters).sort({ $natural: -1 }).populate({ path: 'Company', model: Company });
  }


  async filterAllInternships(filterData) {
    let validFilters = {};

    if(filterData.HideArchived == true)
      validFilters.IsArchived = false;

    if(filterData.Title)
      validFilters.Title = {$regex: new RegExp(filterData.Title, "i")}

    if(filterData.Domain)
      validFilters.Domain = filterData.Domain;

    if(filterData.Location)
      validFilters.Location = filterData.Location;

    if(filterData.Deadline)
      validFilters.Deadline = {"$lte": new Date(filterData.Deadline)};

    if(filterData.StartingDate)
      validFilters.StartingDate = {"$lte": new Date(filterData.StartingDate)};

    if(filterData.Duration){
      if(filterData.Duration == "1 Month or less")
        validFilters.Duration = {"$lte": "1 Month"};
      else if(filterData.Duration == "Between 1 and 3 months")
        validFilters.Duration = {"$gte": "1 Month", "$lte": "3 Months"};
      else if(filterData.Duration == "More than 3 months")
        validFilters.Duration = {"$gte": "3 Months"};
    }

    return Internship.find(validFilters).sort({ $natural: -1 }).populate({ path: 'Company', model: Company });
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

  async starInternship(userId, internshipId) {
    let user = await User.findOne({_id: userId});
    if(!user.starredInternships)
      user.starredInternships = [internshipId];
    else {
      let i = user.starredInternships.indexOf(internshipId);
      if(i != -1)
        user.starredInternships.splice(i,1);
      else
        user.starredInternships.push(internshipId);
    }
    return user.save();
  }

  async getStarredInternships(userId) {
    let user = await User.findOne({_id: userId});
    if(user.starredInternships)
      return user.starredInternships;
    return [];
  }

  async deleteInternship(id) {
    return Internship.deleteOne({ _id: id });
  }
}

module.exports = new InternshipService();
