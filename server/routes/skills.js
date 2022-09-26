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
  },
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
  },
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

  updateById
);
module.exports = router;
