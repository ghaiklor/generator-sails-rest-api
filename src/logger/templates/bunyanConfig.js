/**
 * Bunyan Logger Configuration
 * For detailed documentation you can take a look here - https://github.com/building5/sails-hook-bunyan
 */

import path from 'path';

export default {
  log: {
    /**
     * Bunyan logging level
     * @type {String}
     */
    level: 'silly',

    /**
     * Injects child logger on each request
     * @type {Boolean}
     */
    injectRequestLogger: true,

    /**
     * Logs uncaughtExceptions and terminate the process
     * @type {Boolean}
     */
    logUncaughtException: true,

    /**
     * Signal to listen on for file rotation
     * @type {String}
     */
    rotationSignal: 'SIGHUP',

    /**
     * Convenience setting to log to file
     * @type {String}
     */
    filePath: path.resolve('logs'),

    bunyan: {
      /**
       * Logger name
       * @type {String}
       */
      name: 'app',

      /**
       * Bunyan serializers
       * @type {Object}
       */
      serializers: null,

      /**
       * Output streams
       * @type {Array}
       */
      streams: []
    }
  }
};
