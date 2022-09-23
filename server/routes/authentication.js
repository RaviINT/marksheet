const router = require("express").Router();
const { post, genToken } = require("../controllers/authentication");
const registerValidateUser = require("../validations/body/register.validator");
const loginValidateUser = require("../validations/body/login.validator");
const checkTable = require("../validations/repeat/check");
const passport = require("passport");

router.post(
  "/register",
  (req, res, next) => {
    const { error, value } = registerValidateUser(req.body);
    // console.log(error, value);
    if (error) {
      return res.send(error.details[0].message);
    }
    checkTable(value, next, res);
  },
  post
);
router.post(
  "/login",
  (req, res, next) => {
    
    const { error, value } = loginValidateUser(req.body);
    // console.log(error)
    if (error) {
      return res.send(error.details[0].message);
    }
    next()
    // checkTable(value, next, res);
  },
  passport.authenticate("local"),
  genToken
);
module.exports = router;
