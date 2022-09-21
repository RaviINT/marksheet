const router = require("express").Router();
const {
  getUser,
  postUser,
  deleteUser,
  getById,
  updateById,
} = require("../controllers/student");
const validation = require("../validations/database/studentDatabase");
router.get("/", getUser);
router.post("/", postUser);
router.delete("/:id", validation, deleteUser);
router.get("/:id", validation, getById);
router.put("/:id", validation, updateById);

module.exports = router;
