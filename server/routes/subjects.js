const router = require("express").Router();
const validateStudentParams = require("../validations/params/student.params");
const {validateSubjectBody} = require("../validations/body/subject.validator");
const {
  getSubject,
  addSubject,
  deleteUser,
  updateById,
} = require("../controllers/subject");
const check_RollNo = require("../validations/repeat/roll_no");
const admimAuth=require("../helpers/auth.controller")
router.get(
  "/:id",
  (req, res, next) => {
    const { error, value } = validateStudentParams(req.params);
    if (error) {
      return res.send(error.details[0].message);
    }
    next();
  },
  getSubject
);
router.post(
  "/",
  (req, res, next) => {
    const { error, value } = validateSubjectBody(req.body);
    if (error) {
      return res.send(error.details[0].message);
    }
    check_RollNo(req.body.roll_no, next, res);
  },admimAuth,
  addSubject
);
router.delete(
  "/:id",
  (req, res, next) => {
    const { error, value } = validateStudentParams(req.params);
    if (error) {
      return res.send(error.details[0].message);
    }
    next();
  },admimAuth,
  deleteUser
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
    admimAuth,
    updateById
  );
module.exports = router;
