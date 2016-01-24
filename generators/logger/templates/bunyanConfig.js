"use strict";

/**
 * Bunyan Logger Configuration
 * For detailed documentation you can take a look here - https://github.com/building5/sails-hook-bunyan
 */

module.exports = {
  log: {
    /**
     * Bunyan logging level
     * @type {String}
     */
    level: 'verbose',

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
    rotationSignal: null,

    /**
     * Convenience setting to log to file
     * @type {String}
     */
    filePath: null,

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
      streams: null
    }
  }
};
