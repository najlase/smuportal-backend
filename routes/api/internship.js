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
