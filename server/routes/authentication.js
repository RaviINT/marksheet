const router = require("express").Router();
const { getUser, getUserById, post } = require("../controllers/authentication");
const authenticationToken = require("../passport/login");
const validation =require("../validations/database/loginDatabase")
router.get("/", getUser);
router.get("/:email", validation, authenticationToken, getUserById);
router.post("/", post);
module.exports = router;
