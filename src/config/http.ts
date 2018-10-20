import { IConfig } from '@ycs/core/lib/http';

export const development: IConfig = {
  preListen: server => {
    // Do some stuff.
  },
};

export const production: IConfig = {
  preListen: server => {
    // Do some stuff.
  },
};
