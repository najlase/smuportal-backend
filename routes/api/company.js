const Router = require("express").Router;
const companyService = require("../../services/company.service");

// const { verifyToken } = require("../../helpers/verifyToken");

const router = Router({
  mergeParams: true
});

router.get("/companies", async (req, res) => {
  try {
    const companies = await companyService.getCompanys();
    res.send(companies);
  }
  catch (e) {
    console.log(e);
    res.json({ error: "Failed to get companies"});
  }
});

router.post("/companies", async (req, res) => {
  try {
    const company = await companyService.createCompany(req.body);
    res.send(company);
  }
  catch (e) {
    res.json({ error: e.message});
  }
});

router.patch("/companies/:id/", async (req, res) => {
  try {
    const company = await companyService.updateCompany(req.params.id, req.body);
    res.send(company);
  }
  catch (e) {
    res.json({ error: e.message});
  }
});

router.delete("/companies/:id/", async (req, res) => {
  try {
    await companyService.deleteCompany(req.params.id);
    res.send({});
  }
  catch (e) {
    res.json({ error: "Failed to get companies"});
  }
});

module.exports = router;
