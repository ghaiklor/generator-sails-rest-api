var Q = require('q'),
    mandrill = require('mandrill-api');

/**
 * Create new mandrill instance
 * @param options
 * @constructor
 */
function MandrillMailer(options) {
    if (!(options && options.apiKey)) {
        throw new Error("You must provide apiKey");
    }
}

MandrillMailer.prototype = Object.create({
    constructor: MandrillMailer
});

module.exports = MandrillMailer;
