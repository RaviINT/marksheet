const client = require("../../configuration/client");
const { validateParamsStudent } = require("../body/student.validator");
const validation = async (req, res, next) => {
  const data = await client.query("SELECT * FROM students WHERE id=$1", [
    req.params.id,
  ]);
  if (data.rows.length == 0) {
    return res.send("User not found");
  }

  return next();
};
module.exports = validation;
