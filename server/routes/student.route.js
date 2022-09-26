const router = require("express").Router();
const {
  getUser,
  postUser,
  deleteUser,
  getById,
  updateById,
} = require("../controllers/student");
const validation = require("../validations/database/studentDatabase");
const validateStudentParams = require("../validations/params/student.params");
router.get("/", getUser);
router.post("/", postUser);
router.delete(
  "/:id",
  (req, res, next) => {
    const { error, value } = validateStudentParams(req.params);
    if (error) {
      return res.send(error.details[0].message);
    }
    next();
  },
  validation,
  deleteUser
);
router.get(
  "/:id",
  (req, res, next) => {
    const { error, value } = validateStudentParams(req.params);
    if (error) {
      return res.send(error.details[0].message);
    }
    next();
  },
  validation,
  getById
);
router.put(
  "/:id",
  (req, res, next) => {
    const { error, value } = validateStudentParams(req.params);
    if (error) {
      return res.send(error.details[0].message);
    }
    next();
  },
  validation,
  updateById
);

module.exports = router;
