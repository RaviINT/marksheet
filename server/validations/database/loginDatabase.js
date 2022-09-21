const client = require("../../configuration/client");
const { validateBodyLogin } = require("../body/login.validator");
const Joi = require("joi");

const loginBodySchema = Joi.object({
  email: Joi.string().email().required(),
});
const validator = (payload) =>
  loginBodySchema.validate(payload, { abortEarly: false });
const validation = async (req, res, next) => {
  const { error, value } = validator(req.params);
  if (error) {
    return res.send(error.details);
  }


  const data = await client.query("SELECT * FROM data WHERE email=$1", [
    value.email,
  ]);
  if (data.rows.length == 0) {
    return res.send("User not found");
  }
  console.log("founded");
  return next();
};
module.exports = validation;
