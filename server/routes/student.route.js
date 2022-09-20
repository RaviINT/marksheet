const router = require("express").Router();
const { getUser, postUser,deleteUser,getById,updateById } = require("../controllers/student");



router.get("/student", getUser);
router.post("/student", postUser);
router.delete("/student/:id",deleteUser)
router.get("/student/:id", getById);
router.put("/student/:id",updateById)


module.exports = router;
