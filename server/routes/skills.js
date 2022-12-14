const router = require("express").Router();
const validateStudentParams = require("../validations/params/student.params");
const { validateSkillBody } = require("../validations/body/skill.validator");
const {
  getSubject,
  addSkill,
  deleteUser,
  updateById,
} = require("../controllers/skill");
const check_Skills = require("../validations/repeat/skill");
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
    const { error, value } = validateSkillBody(req.body);
    if (error) {
      return res.send(error.details[0].message);
    }
    check_Skills(req.body.roll_no, next, res);
  },admimAuth,
  addSkill
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
