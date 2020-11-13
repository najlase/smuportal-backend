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

  //Route to create an internship
router.post("/addInternship", async(req, res, next) => {
  try {
      const {title, author, isbn} = req.body;
      await bookService.addBook(title, author, isbn);
      res.send({ success: true, msg: "Book Added"});
  } catch (err) {
      res.send({ success: false, msg: "Book not Added!", err})
  }
});

// Route to delete an internship
router.delete("/deleteInternship/:isbn", async(req, res) => {
  try {
    const isbn = req.params.isbn;
    internshipService.deleteInternship(isbn);
    res.send({ success: true, msg: "Internship deleted"})
  } catch (error) {
    res.send({ success: false, msg: "Internship not added!"})
  }
});

module.exports = router;