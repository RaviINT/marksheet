const router = require("express").Router();
const {getImageById}=require("../controllers/image")
const  upload  = require("../imageUpload/uploadImage");

const imageUpload = require("../log/imageUpload");

router.post("/", imageUpload.single("image"), upload);
router.get("/:id",getImageById)
module.exports = router;
