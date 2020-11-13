const Router = require("express").Router;
const internshipService = require("../../services/internship.service")();
const Book = require("../../models/Internship");
const router = Router({
    mergeParams: true,
  });

  router.get("http://localhost:3000/api/user/getInternships", async(req, res) => {
    try {
      const internship = await internshipService.getInternship();
      res.send(internship);
    } catch(err) {
      res.json({ success: false, msg: "Failed to get internships"});
    }
  });


module.exports = router;