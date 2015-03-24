/**
 * HTTP Server Settings
 *
 * Configuration for the underlying HTTP server in Sails
 */

module.exports.http = {
  /**
   * This is the options object for the `createServer` method, as discussed here:
   * http://nodejs.org/api/https.html#https_class_https_server
   *
   * @type {Object|Boolean}
   */
  serverOptions: undefined,

  /**
   * You can define own custom middleware here
   * @param app Express application
   */
  customMiddleware: function (app) {

  },

  /**
   * Configures the middleware function used for parsing the HTTP request body
   * Defaults to the Formidable-based version built into Express/Connect
   *
   * To enable streaming file uploads (to disk or somewhere else)
   * you'll want to set this option to `false` to disable the body parser
   *
   * @type {Function|Boolean|Object}
   */
  bodyParser: undefined,

  /**
   * Express middleware to use for every Sails request
   * @type {Object}
   */
  middleware: {
    /**
     * The order in which middleware should be run for HTTP request
     * @type {Array}
     */
    order: [
      'bodyParser',
      'compress',
      'methodOverride',
      '$custom',
      'router',
      '404',
      '500'
    ]
  }
};
