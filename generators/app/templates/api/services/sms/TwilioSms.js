var Q = require('q');
var util = require('util');
var twilio = require('twilio');
var BaseSms = require('./BaseSms');

util.inherits(TwilioSms, BaseSms);

/**
 * Create new Twilio SMS
 * @constructor
 */
function TwilioSms(options) {
  BaseSms.apply(this, arguments);

  if (!(options.accountSid || options.authToken)) {
    throw new Error('You must provide accountSid and authToken');
  }

  this.setAccountSid(options.accountSid);
  this.setAuthToken(options.authToken);
  this._createClient();
}

/**
 * Send message
 * @returns {Promise}
 */
TwilioSms.prototype.send = function () {
  var defer = Q.defer();

  this._getClient().messages.create({
    from: this.getSender(),
    to: this.getRecipient(),
    body: this.getMessage()
  }, function (error, message) {
    if (error) {
      defer.reject(error);
    } else {
      defer.resolve(message);
    }
  });

  return defer.promise;
};

/**
 * Get twilio client
 * @returns {*}
 * @private
 */
TwilioSms.prototype._getClient = function () {
  return this._client;
};

/**
 * Set Twilio client
 * @returns {TwilioSms}
 * @private
 */
TwilioSms.prototype._createClient = function () {
  this._client = twilio(this.getAccountSid(), this.getAuthToken());
  return this;
};

/**
 * Get twilio auth token
 * @returns {String}
 */
TwilioSms.prototype.getAuthToken = function () {
  return this.authToken;
};

/**
 * Set twilio auth token
 * @param {String} token
 * @returns {TwilioSms}
 */
TwilioSms.prototype.setAuthToken = function (token) {
  this.authToken = token;
  return this;
};

/**
 * Get account sid
 * @returns {String}
 */
TwilioSms.prototype.getAccountSid = function () {
  return this.accountSid;
};

/**
 * Set account sid
 * @param {String} sid
 * @returns {TwilioSms}
 */
TwilioSms.prototype.setAccountSid = function (sid) {
  this.accountSid = sid;
  return this;
};

module.exports = TwilioSms;
