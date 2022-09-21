const router = require("express").Router();
const { getUser, getToken, post } = require("../controllers/authentication");

const validation = require("../validations/database/loginDatabase");
const checkTable = require("../validations/repeat/check");

const passport=require("passport");
require("../passport/passport")(passport);

router.get("/",passport.authenticate("jwt",{session:false}), getUser);
router.post("/", checkTable, post);
router.post("/getToken", getToken);
module.exports = router; 
