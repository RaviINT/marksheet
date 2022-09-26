const Joi = require("joi");
const validator = (schema) => (payload) =>
  schema.validate(payload, { abortEarly: false });

const skillBodySchema = Joi.object({
  roll_no: Joi.number().required(),
  development :Joi.string().required(),
  attitude :Joi.string().required(),
  responsibility :Joi.string().required(),
  music :Joi.string().required(),
  hardwork :Joi.string().required()
});

const skillBodyUpdateSchema = Joi.object({

  development :Joi.string().required(),
  attitude :Joi.string().required(),
  responsibility :Joi.string().required(),
  music :Joi.string().required(),
  hardwork :Joi.string().required()
});

exports.validateSkillBody = validator(skillBodySchema);
exports.validateUpdateBodySkill = validator(skillBodyUpdateSchema);
