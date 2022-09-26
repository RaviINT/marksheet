const Joi = require("joi");
function validateStudentParams(user) {
  const JoiSchema = Joi.object({
    id:Joi.number().required()
    
  }).options({ abortEarly: false });

  return JoiSchema.validate(user);
}


module.exports= validateStudentParams