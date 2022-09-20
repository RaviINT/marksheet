const router = require("express").Router();
const { getUser, postUser,deleteUser,getById,updateById } = require("../controllers/student");
router.get("/student", getUser);
router.post("/student", postUser);
router.delete("/student",deleteUser)
router.get("/student/id", getById);
router.put("/student",updateById)
module.exports = router;
