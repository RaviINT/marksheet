const Joi = require("joi");
const validator = (schema) => (payload) =>
  schema.validate(payload, { abortEarly: false });

const studentBodySchema = Joi.object({
  name: Joi.string().required(),
  teachers_id: Joi.string().required(),
  roll_no: Joi.number().required(),
  date_of_birth: Joi.string().required(),
  class: Joi.string().required(),
  division: Joi.string().required(),
});

const studentBodyUpdateSchema = Joi.object({
  name: Joi.string().required(),
  roll_no: Joi.number().required(),
  date_of_birth: Joi.string().required(),
  class: Joi.string().required(),
  division: Joi.string().required(),
});

exports.validateBodyStudent = validator(studentBodySchema);
exports.validateUpdateBodyStudent = validator(studentBodyUpdateSchema);

