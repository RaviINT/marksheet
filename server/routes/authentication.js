const router = require("express").Router();
const { post, genToken } = require("../controllers/authentication");

const validation = require("../validations/database/loginDatabase");
const checkTable = require("../validations/repeat/check");

const passport = require("passport");
// require("../passport/passport")(passport);

router.post("/register", checkTable, post);
router.post("/login", passport.authenticate("local"),genToken);
module.exports = router;
