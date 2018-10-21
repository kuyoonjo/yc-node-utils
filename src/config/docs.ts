import { IConfig } from '@ycs/core/lib/docs';
import * as config from './environment';

export const development: IConfig = {
  path: '/api',
  options: {
    swagger: '2.0',
    info: {
      title: 'Restful API Documentation',
      description: 'by Yu Chen.',
      version: '1.0.0',
      contact: {
        email: 'yu.chen@live.ie',
      },
      license: {
        name: 'Apache 2.0',
        url: 'http://www.apache.org/licenses/LICENSE-2.0.html',
      },
    },

    host: `${config.development.domain}:${config.development.port}`,
    schemes: ['http'],
    basePath: '/',
    produces: ['application/json', 'application/xml'],
  },
};

export const production: IConfig = {
  path: '/api',
  options: {
    swagger: '2.0',
    info: {
      title: 'Restful API Documentation',
      description: 'by Yu Chen.',
      version: '1.0.0',
      contact: {
        email: 'yu.chen@live.ie',
      },
      license: {
        name: 'Apache 2.0',
        url: 'http://www.apache.org/licenses/LICENSE-2.0.html',
      },
    },

    host: `yc-node-utils.herokuapp.com`,
    schemes: ['https'],
    basePath: '/',
    produces: ['application/json', 'application/xml'],
  },
};
