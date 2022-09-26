const Joi = require("joi");
const validator = (schema) => (payload) =>
  schema.validate(payload, { abortEarly: false });

const subjectBodySchema = Joi.object({
  roll_no: Joi.number().required(),
  fa: Joi.number().required(),
  fa_oral: Joi.number().required(),
  sa: Joi.number().required(),
  sa_oral: Joi.number().required(),
});

const subjectBodyUpdateSchema = Joi.object({
  fa: Joi.number().required(),
  fa_oral: Joi.number().required(),
  sa: Joi.number().required(),
  sa_oral: Joi.number().required(),
});

exports.validateSubjectBody = validator(subjectBodySchema);
exports.validateUpdateBodySubject = validator(subjectBodyUpdateSchema);
