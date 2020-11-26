const Router = require("express").Router;
const internshipService = require("../../services/internship.service");

// const { verifyToken } = require("../../helpers/verifyToken");

const router = Router({
  mergeParams: true
});

router.get("/internships", async (req, res) => {
  try {
    const internships = await internshipService.getInternships();
    res.send(internships);
  }
  catch (e) {
    res.json({ success: false, msg: "Failed to get internships"});
  }
});

router.post("/internships", async (req, res) => {
  try {
    const { Domain, Company, Description, Location, Duration, Deadline } = req.body;
    const internship = await internshipService.createInternship({ Domain, Company, Description, Location, Duration, Deadline });
    res.send(internship);
  }
  catch (e) {
    res.json({ success: false, msg: e.message});
  }
});

router.patch("/internships/:id/", async (req, res) => {
  try {
    const { Domain, Company, Description, Location, Duration, Deadline } = req.body;
    const internship = await internshipService.updateInternship(req.params.id, { Domain, Company, Description, Location, Duration, Deadline });
    res.send(internship);
  }
  catch (e) {
    res.json({ success: false, msg: e.message});
  }
});

module.exports = router;
