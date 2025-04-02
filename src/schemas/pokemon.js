const Joi = require('@hapi/joi');

const schema = Joi.object({
  name: Joi.string().required(),
  type: Joi.array()
    .required()
    .min(1)
});

module.exports = schema;
