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
    console.log(e);
    res.json({ error: "Failed to get internships"});
  }
});

router.get("/internships/starred", async (req, res) => {
  try {
    let userId = "5fdf84440e18dc2b67e1459d"; // a constant value for testing
    const internships = await internshipService.getStarredInternships(userId);
    res.send(internships);
  }
  catch (e) {
    console.log(e);
    res.json({ error: "Failed to get internships"});
  }
});

router.get("/internships/all", async (req, res) => {
  try {
    const internships = await internshipService.getAllInternships();
    res.send(internships);
  }
  catch (e) {
    console.log(e);
    res.json({ error: "Failed to get internships"});
  }
});

router.post("/internships/filter", async (req, res) => {
  try {
    const internship = await internshipService.filterInternships(req.body);
    res.send(internship);
  }
  catch (e) {
    res.json({ error: e.message});
  }
});

router.post("/internships/filterAll", async (req, res) => {
  try {
    const internship = await internshipService.filterAllInternships(req.body);
    res.send(internship);
  }
  catch (e) {
    res.json({ error: e.message});
  }
});

router.post("/internships", async (req, res) => {
  try {
    const internship = await internshipService.createInternship(req.body);
    res.send(internship);
  }
  catch (e) {
    res.json({ error: e.message});
  }
});

router.patch("/internships/:id/", async (req, res) => {
  try {
    const internship = await internshipService.updateInternship(req.params.id, req.body);
    res.send(internship);
  }
  catch (e) {
    res.json({ error: e.message});
  }
});

router.post("/internships/:id/star", async (req, res) => {
  try {
    let userId = "5fdf84440e18dc2b67e1459d"; // a constant value for testing
    await internshipService.starInternship(userId, req.params.id);
    res.send({success: true});
  }
  catch (e) {
    res.json({ error: e.message});
  }
});

router.patch("/internships/:id/archive", async (req, res) => {
  try {
    const internship = await internshipService.archiveInternship(req.params.id);
    res.send(internship);
  }
  catch (e) {
    res.json({ error: e.message});
  }
});

router.patch("/internships/:id/restore", async (req, res) => {
  try {
    const internship = await internshipService.restoreInternship(req.params.id);
    res.send(internship);
  }
  catch (e) {
    res.json({ error: e.message});
  }
});

router.delete("/internships/:id/", async (req, res) => {
  try {
    await internshipService.deleteInternship(req.params.id);
    res.send({});
  }
  catch (e) {
    res.json({ error: "Failed to get internships"});
  }
});

module.exports = router;
