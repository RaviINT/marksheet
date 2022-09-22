const multer = require("multer");
const path = require("path");
const fs = require("fs");
const imageStorage = multer.diskStorage({
  destination: function (req, file, callback) {
    
    callback(null, path.join(__dirname, "../images"));
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const imageUpload = multer({
  storage: imageStorage,
  limits: {
    fileSize: 10000000,
  },
  fileFilter(req, file, cb) {
    console.log("imageStorage");
    if (!file.originalname.match(/\.(png||jpg||pdf||txt ||jfif)$/)) {
      return cb(new Error("Please upload a Image"));
    }
    cb(null, true);
  },
});

module.exports = imageUpload;
