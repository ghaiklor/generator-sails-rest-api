/**
 * Winston Logger Configuration
 * For detailed information take a look here - https://github.com/Kikobeats/sails-hook-winston
 */

import path from 'path';

export default {
  log: {
    /**
     * Winston logging level for the console transport
     * @type {String}
     */
    level: 'silly',

    /**
     * Outputs the timestamp in the console transport
     * @type {Boolean}
     */
    timestamp: true,

    /**
     * DailyRotateFile Transport Configuration
     * More information here - https://github.com/winstonjs/winston/blob/master/docs/transports.md#dailyrotatefile-transport
     */
    dailyRotate: {
      dirname: path.resolve('logs'),
      datePattern: '.yyyy-MM-dd.log',
      filename: 'app',
      prettyPrint: true,
      timestamp: true,
      level: 'silly'
    },

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
