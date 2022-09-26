const router = require("express").Router();
const validateStudentParams = require("../validations/params/student.params");

router.get("/:id", (req, res, next) => {
  const { error, value } = validateStudentParams(req.params);
  if (error) {
    return res.send(error.details[0].message);
  }
  next();
});
module.exports = router;
