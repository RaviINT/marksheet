const router = require("express").Router();
const validateStudentParams = require("../validations/params/student.params");
const { validateAttendenceBody } = require("../validations/body/attendence");
const {
  getAttendence,
  addAttendence,
  deleteAttendence,
  updateById,
} = require("../controllers/attendence");
const check_Attendence = require("../validations/repeat/attendence");
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
  getAttendence
);
router.post(
  "/",
  (req, res, next) => {
    const { error, value } = validateAttendenceBody(req.body);
    if (error) {
      return res.send(error.details[0].message);
    }
    check_Attendence(req.body.roll_no, next, res);
  },admimAuth,
  addAttendence
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
  deleteAttendence
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
