const router = require("express").Router();
const {
  getUser,
  postUser,
  deleteUser,
  getById,
  updateById,
} = require("../controllers/student");
const validation = require("../validations/db.validations")
router.get("/student", getUser);
router.post("/student", postUser);
router.delete("/student/:id", validation,deleteUser);
router.get("/student/:id", validation,getById);
router.put("/student/:id", validation,updateById);

module.exports = router;
