/**
 * HTTP Server Settings
 *
 * Configuration for the underlying HTTP server in Sails
 */

module.exports.http = {
    /**
     * You can define own custom middleware here
     * @param app Express application
     */
    customMiddleware: function (app) {

    },

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
            '$custom',
            'router',
            '404',
            '500'
        ]
    }
};
