const Router = require("express").Router;
const myApplicationService = require("../../services/myApplication.service");
const applicationListService = require("../../services/ApplicationList.service");

// const { verifyToken } = require("../../helpers/verifyToken");

const router = Router({
  mergeParams: true
});

router.get("/applicationList", async (req, res) => {
  try {
    const application = await applicationService.getApplication();
    res.send(internships);
  }
  catch (e) {
    res.json({ success: false, msg: "Failed to get application"});
  }
});

router.post("/myApplication", async (req, res) => {
  try {
    const { StdID, InternshipID, Files } = req.body;
    const application = await application.newApplication({ StdID, InternshipID, Files  });
    res.send(application);
  }
  catch (e) {
    res.json({ success: false, msg: e.message});
  }
});

module.exports = router;