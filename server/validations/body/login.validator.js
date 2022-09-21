const Joi = require("joi");
const validator = (schema) => (payload) =>
  schema.validate(payload, { abortEarly: false });

const loginBodySchema = Joi.object({
  email: Joi.string().email().required(),
  password:Joi.string().required(),
});

exports.validateBodyLogin = validator(loginBodySchema);
