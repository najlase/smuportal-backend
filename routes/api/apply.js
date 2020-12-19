const Router = require("express").Router;
const myApplicationService = require("../../services/myApplication.service");
const ApplicationListService = require("../../services/applicationList.service")();

// const { verifyToken } = require("../../helpers/verifyToken");

const router = Router({
  mergeParams: true
});

router.get("/applicationList", async (req, res) => {
  try {
    const applicationList = await ApplicationListService.getApplication();
    res.send(applicationList);
  }
  catch (e) {
    console.log(e);
    res.json({ success: false, msg: "Failed to get application"});
  }
});

router.post("/myApplication", async (req, res) => {
  try {
    const { StdID, InternshipID, Files } = req.body;
    const myApplication = await myApplicationService.newApplication({ StdID, InternshipID, Files  });
    res.send(myApplication);
  }
  catch (e) {
    res.json({ success: false, msg: e.message});
  }
});

module.exports = router;