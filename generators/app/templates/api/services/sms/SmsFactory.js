var TwilioSms = require('./TwilioSms');

/**
 * SmsFactory factory class
 * @constructor
 */
function SmsFactory() {
}

SmsFactory.prototype = Object.create({
  constructor: SmsFactory,

  /**
   * Create new sms instance
   * @param {String} type Sms type
   * @param {Object} options Object with options
   */
  create: function (type, options) {
    switch (type) {
      case 'twilio':
        return this.createTwilio(options);
      default:
        throw new Error('Unrecognized type -> ' + type);
    }
  },

  /**
   * Create Twilio sms instance
   * @param {Object} options Object with send configuration
   * @returns {TwilioSms}
   */
  createTwilio: function (options) {
    return new TwilioSms(options);
  }
});

module.exports = SmsFactory;
