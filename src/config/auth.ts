import { IConfig } from '@ycs/core/lib/auth';

export const development: IConfig = {
  messages: {
    errors: {
      empty_username: 'Username cannot be blank',
      empty_password: 'Password cannot be blank',
      username_already_in_use: 'The specified username is already in use.',
      username_not_registered: 'This username is not registered.',
      invalid_password: 'Invalid password',
      unauthorized: 'Unauthorized',
      invalid_token: 'Invalid token',
      no_permission: 'No permission to access',
    },
  },
  secret: 'This is a secret 000',
  enableSimpleAuth: false,
  defaultRoles: ['user', 'admin', 'super'],
};

export const production: IConfig = {
  messages: {
    errors: {
      empty_username: 'Username cannot be blank',
      empty_password: 'Password cannot be blank',
      username_already_in_use: 'The specified username is already in use.',
      username_not_registered: 'This username is not registered.',
      invalid_password: 'Invalid password',
      unauthorized: 'Unauthorized',
      invalid_token: 'Invalid token',
      no_permission: 'No permission to access',
    },
  },
  secret: 'This is a secret 000',
  enableSimpleAuth: false,
  defaultRoles: ['user', 'admin', 'super'],
};
