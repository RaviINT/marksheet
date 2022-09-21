const Joi = require("joi");
const validator = (schema) => (payload) =>
  schema.validate(payload, { abortEarly: false });

const studentBodySchema = Joi.object({
  name: Joi.string().required(),
});
const studentParamsSchema = Joi.object({
  id: Joi.number().required().min(1).max(100),
});
exports.validateBodyStudent = validator(studentBodySchema);
exports.validateParamsStudent = validator(studentParamsSchema);
