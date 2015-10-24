/**
 * Development environment settings
 * @description :: This section overrides all other config values ONLY in development environment
 */

export default {
  port: 3000,
  log: {
    level: 'verbose'
  },
  models: {
    connection: 'disk'
  }
};
