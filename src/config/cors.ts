import { IConfig } from '@ycs/core/lib/cors';

export const development: IConfig = {
  allowMethods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
};

export const production: IConfig = {
  allowMethods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
};
