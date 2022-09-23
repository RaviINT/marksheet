const router = require("express").Router();
const { post, genToken } = require("../controllers/authentication");
const validateUser = require("../validations/body/register.validator");
const checkTable = require("../validations/repeat/check");
const passport = require("passport");

router.post(
  "/register",
  (req, res, next) => {
    const { error, value } = validateUser(req.body);
    // console.log(error, value);
    if (error) {
      return res.send(error.details[0].message);
    }
    checkTable(value, next, res);
  },
  post
);
router.post("/login", passport.authenticate("local"), genToken);
module.exports = router;
