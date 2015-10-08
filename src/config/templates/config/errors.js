/**
 * Configuration file where you can store error codes for responses
 *
 * It's just a storage where you can define your custom API errors and their description.
 * You can call then in your action res.ok(data, sails.config.errors.USER_NOT_FOUND);
 */

export const errors = {
  USER_NOT_FOUND: {
    code: 'E_USER_NOT_FOUND',
    message: 'User with specified credentials is not found',
    status: 401
  },

  AUTH_FAILED: {
    code: 'E_AUTH_FAILED',
    message: '',
    status: 401
  }
};
