var StripePayment = require('./StripePayment');

/**
 * Create factory for Payment System
 * @constructor
 */
function PaymentFactory() {
}

PaymentFactory.prototype = Object.create({
    constructor: PaymentFactory,

    /**
     * Create new Payment instance
     * @param {String} type Type of Payment
     * @param {Object} options Options for Payment System
     * @returns {*}
     */
    create: function (type, options) {
        switch (type) {
            case 'stripe':
                return this.createStripe(options);
            default:
                throw new Error('Unrecognized type');
        }
    },

    /**
     * Create Payment System
     * @param {Object} options Options for Payment System
     * @returns {StripePayment}
     */
    createStripe: function (options) {
        return new StripePayment(options);
    }
});

module.exports = PaymentFactory;
