const Joi = require("joi");
function validateUser(user) {
  const JoiSchema = Joi.object({
    name: Joi.string().required("Name is required"),
    email: Joi.string().email().min(5).max(50),
    password:Joi.string().required(),
    ip:Joi.string().required()
  }).options({ abortEarly: false });

  return JoiSchema.validate(user);
}


module.exports= validateUser
