"use strict";

/**
 * Winston Logger Configuration
 * For detailed information take a look here - https://github.com/Kikobeats/sails-hook-winston
 */

module.exports = {
  log: {
    /**
     * Winston logging level for the console transport
     * @type {String}
     */
    level: 'verbose',

    /**
     * Outputs the timestamp in the console transport
     * @type {Boolean}
     */
    timestamp: true,

    /**
     * Custom Winston transports
     * More information here - https://github.com/winstonjs/winston/blob/master/docs/transports.md
     * @example
     * transports: [{
     *   module: require('winston-mongodb').MongoDB,
     *   config: {}
     * }]
     */
    transports: []
  }
};
