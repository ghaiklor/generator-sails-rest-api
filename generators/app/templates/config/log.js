/**
 * Built-in Log Configuration
 *
 * Configure the log level for your app
 */

var path = require('path');

module.exports.log = {
    /**
     * The order of precedence for log levels from lowest to highest is:
     * silly, verbose, info, debug, warn, error, silent
     * @type {String}
     */
    level: 'silly',

    /**
     * Boolean flag indicating whether to suppress output
     * @type {Boolean}
     */
    silent: false,

    /**
     * Boolean flag indicating if we should colorize output
     * @type {Boolean}
     */
    colorize: true,

    /**
     * Boolean flag indicating if we should prepend output with timestamps.
     * If function is specified, its return value will be used instead of timestamps.
     * @type {Boolean|Function}
     */
    timestamp: true,

    /**
     * Boolean flag indicating if we should util.inspect the meta.
     * If function is specified, its return value will be the string representing the meta.
     * @type {Boolean|Function}
     */
    prettyPrint: true,

    /**
     * Numeric indicating how many times to recurse while formatting the object with util.inspect.
     * Only used with prettyPrint: true.
     * @type {Number}
     */
    depth: 1,

    /**
     * Boolean flag indicating if we should prepend output with level
     * @type {Boolean}
     */
    showLevel: true,

    /**
     * If function is specified, its return value will be used instead of default output.
     * @type {Function|Object}
     */
    formatter: function (options) {
        var message = this.timestamp ? Date.now() : '';

        message += (options.message !== 'undefined' ? options.message : '');
        message += (options.meta && Object.keys(options.meta).length ? '\n\t' + JSON.stringify(options.meta) : '' );

        return message;
    },

    /**
     * Add daily rotate transport
     * @description Pipes logs to files sorted by dates
     * @type {Object}
     */
    dailyRotate: {
        level: 'silly',
        timestamp: true,
        filename: 'app-',
        prettyPrint: true,
        dirname: path.resolve('logs'),
        datePattern: 'yyyy-MM-dd.log'
    }
};
