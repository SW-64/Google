import Joi from 'joi';

export const configModuleValidationSchema = Joi.object({
  GOOGLE_CLIENT_ID: Joi.string().required(),
  GOOGLE_SECRET: Joi.string().required(),
});
