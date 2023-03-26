import { ConfigModuleOptions } from '@nestjs/config';
import * as Joi from 'joi';
import { DEFAULT_PORT } from './const';

export const configModuleOptions: ConfigModuleOptions = {
  isGlobal: true,
  validationSchema: Joi.object({
    APP_PORT: Joi.number().default(DEFAULT_PORT),
  }),
};
