const router = require("express").Router();
const { getUser, postUser } = require("../controllers/student");
router.get("/student", getUser);
router.get("/students", postUser);
module.exports = router;
