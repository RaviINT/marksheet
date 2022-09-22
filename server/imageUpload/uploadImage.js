const {create}=require("../models/image")
let upload = async (req, res) => {
  console.log("image-upload");
  const body = req.body;
  body.image = req.file.path;
  create(body, (err, results) => {
    if (err) {
      console.log(err);
      return res.status(400).json({
        success: 0,
        message: err,
      });
    }
    return res.status(200).json({
      success: 1,
      data: results,
    });
  });
};

module.exports=upload