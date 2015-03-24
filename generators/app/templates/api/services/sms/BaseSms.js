/**
 * Implement message
 * @type {String}
 * @private
 */
var IMPLEMENT_MESSAGE = 'Not implemented';

/**
 * Create new basic SMS instance
 * @param {Object} options Object with sender, recipient and message
 * @constructor
 */
function BaseSms(options) {
  if (!(options || options.sender || options.recipient)) {
    throw new Error('You must provide sender and recipient numbers');
  }

  this.setSender(options.sender);
  this.setRecipient(options.recipient);
  this.setMessage(options.message);
}

BaseSms.prototype = Object.create({
  constructor: BaseSms,

  /**
   * Get sender number
   * @returns {String}
   */
  getSender: function () {
    return this.sender;
  },

  /**
   * Set sender number
   * @param {String} senderNumber
   * @returns {BaseSms}
   */
  setSender: function (senderNumber) {
    this.sender = senderNumber;
    return this;
  },

  /**
   * Get recipient number
   * @returns {String}
   */
  getRecipient: function () {
    return this.recipient;
  },

  /**
   * Set recipient number
   * @param {String} recipientNumber
   * @returns {BaseSms}
   */
  setRecipient: function (recipientNumber) {
    this.recipient = recipientNumber;
    return this;
  },

  /**
   * Get sms body message
   * @returns {String}
   */
  getMessage: function () {
    return this.message;
  },

  /**
   * Set message's body
   * @param {String} message
   * @returns {BaseSms}
   */
  setMessage: function (message) {
    this.message = message || '';
    return this;
  },

  send: function () {
    throw new Error(IMPLEMENT_MESSAGE);
  }
});

module.exports = BaseSms;
