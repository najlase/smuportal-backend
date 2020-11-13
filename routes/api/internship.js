const Router = require("express").Router;
const InternshipService = require("../../services/internship.service");

const internshipService = InternshipService();
// const { verifyToken } = require("../../helpers/verifyToken");

const router = Router({
  mergeParams: true
});

router.get("/internships", async (req, res) => {
  const internships = await internshipService.getInternships();
  res.send(internships);
});

module.exports = router;
