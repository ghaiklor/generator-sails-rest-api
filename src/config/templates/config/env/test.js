/**
 * Test environment settings
 * @description :: This section overrides all other config values ONLY in test environment
 */

export default {
  log: {
    level: 'silent'
  },
  models: {
    connection: 'memory',
    migrate: 'drop'
  }
};
