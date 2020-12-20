const Router = require("express").Router;
const ApplicationService = require("../../services/myApplication.service");


// const { verifyToken } = require("../../helpers/verifyToken");

const router = Router({
  mergeParams: true
});



router.get("/applicationList", async (req, res) => {
  try {
    const applicationList = await ApplicationService.getApplication();
    res.send(applicationList);
  }
  catch (e) {
    res.json({ success: false, msg: "Failed to get application"});
  }
});

router.get("/applicationList/user/:userId", async (req, res) => {
  try {
    const applicationList = await ApplicationService.getApplicationByUserId(req.params.userId);
    res.send(applicationList);
  }
  catch (e) {
    res.json({ success: false, msg: "Failed to get application"});
  }
});

router.get("/applicationList/:status", async (req, res) => {
  try {
    const applicationList = await ApplicationService.getApplicationByStatus(req.params.status);
    res.send(applicationList);
  }
  catch (e) {
    console.log(e);
    res.json({ success: false, msg: "Failed to get application by status"});
  }
});


router.post("/myApplication", async (req, res) => {
  try {
    let internshipData = req.body;
    internshipData.UserID = "5fdf84440e18dc2b67e1459d"; // a constant value for testing
    const myApplication = await ApplicationService.addApplication(internshipData);
    res.send(myApplication);
  }
  catch (e) {
    console.log(e);
    res.json({ success: false, msg: "Cannot add this application"});
  }
});


router.patch("/applicationList/:id/", async (req, res) => {
  try {
    const appList = await ApplicationService.updateApplicationStatus(req.params.id, req.body.status);
    res.send(appList);
  }
  catch (e) {
    res.json({ success: false, msg: "Cannot update the status"});
  }
});


router.delete("/applicationList/:id/", async (req, res) => {
  try {
    await ApplicationService.deleteApplication(req.params.id);
    res.send({succes:true});
  }
  catch (e) {
    res.json({ success: false, msg: "Failed to delete application"});
  }
});

module.exports = router;