import * as Joi from 'joi';

export const JoiValidationSchema = Joi.object({
  MONGO_DATABASE: Joi.string(),
  PORT: Joi.number(),
  POSTGRES_HOST: Joi.string().default('localhost'),
  POSTGRES_PORT: Joi.number().default(5432),
  POSTGRES_USER: Joi.string().default('postgres'),
  POSTGRES_PASSWORD: Joi.string().default('root'),
  POSTGRES_DB: Joi.string().default('postgres'),
  VERSION: Joi.number(),
  DESCRIPTION: Joi.string(),
  NAME: Joi.string(),
});
