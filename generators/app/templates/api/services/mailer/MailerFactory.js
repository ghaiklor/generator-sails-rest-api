var MandrillMailer = require('./MandrillMailer');

/**
 * Create factory for Mailer
 * @constructor
 */
function MailerFactory() {
}

MailerFactory.prototype = Object.create({
  constructor: MailerFactory,

  /**
   * Create new Mailer instance
   * @param {String} type Which type of mailer need to use
   * @param {Object} options Unified options for Mailer
   * @returns {*}
   */
  create: function (type, options) {
    switch (type) {
      case 'mandrill':
        return this.createMandrill(options);
      default:
        throw new Error('Unrecognized type -> ' + type);
    }
  },

  /**
   * Create Mandrill mailer
   * @returns {MandrillMailer}
   */
  createMandrill: function (options) {
    return new MandrillMailer(options);
  }
});

module.exports = MailerFactory;
