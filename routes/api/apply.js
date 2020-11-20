const Router = require("express").Router;
const applicationService = require("../../services/application.service");

// const { verifyToken } = require("../../helpers/verifyToken");

const router = Router({
  mergeParams: true
});

router.get("/application", async (req, res) => {
  try {
    const application = await applicationService.getApplication();
    res.send(internships);
  }
  catch (e) {
    res.json({ success: false, msg: "Failed to get application"});
  }
});

router.post("/application", async (req, res) => {
  try {
    const { StdID, InternshipID, AppliedOn } = req.body;
    const application = await application.newApplication({ StdID, InternshipID, AppliedOn  });
    res.send(application);
  }
  catch (e) {
    res.json({ success: false, msg: e.message});
  }
});

module.exports = router;