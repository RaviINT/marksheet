const Joi = require("joi");
const validator = (schema) => (payload) =>
  schema.validate(payload, { abortEarly: false });

const attendenceBodySchema = Joi.object({
  roll_no: Joi.number().required(),
  term_1: Joi.number().required(),
  term_2: Joi.number().required(),
});

const attendenceBodyUpdateSchema = Joi.object({
  term_1: Joi.number().required(),
  term_2: Joi.number().required(),
});

exports.validateAttendenceBody = validator(attendenceBodySchema);
exports.validateUpdateBodyAttendence = validator(attendenceBodyUpdateSchema);
