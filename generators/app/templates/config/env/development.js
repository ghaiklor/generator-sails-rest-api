/**
 * Development environment settings
 * @description :: This section overrides all other config values ONLY in development environment
 */

module.exports = {
    log: {
        level: 'silly'
    },
    models: {
        connection: 'disk'
    }
};
