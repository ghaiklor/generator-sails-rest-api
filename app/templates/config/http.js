/**
 * HTTP Server Settings
 *
 * Configuration for the underlying HTTP server in Sails
 */

module.exports.http = {
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
            'router',
            '404',
            '500'
        ]
    }
};
