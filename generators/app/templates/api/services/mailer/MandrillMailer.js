var util = require('util');
var Q = require('q');
var mandrill = require('mandrill-api');
var BaseMailer = require('./BaseMailer');

util.inherits(MandrillMailer, BaseMailer);

/**
 * Create new Mandrill instance
 * @param {Object} options Object with options to Mandrill
 * @constructor
 */
function MandrillMailer(options) {
  BaseMailer.apply(this, arguments);

  if (!(options && options.apiKey)) {
    throw new Error("You must provide API key");
  }

  this.setApiKey(options.apiKey);
  this.createClient();
}

MandrillMailer.prototype = Object.create({
  constructor: MandrillMailer,

  /**
   * Get API key of current Mandrill instance
   * @returns {String}
   */
  getApiKey: function () {
    return this._apiKey;
  },

  /**
   * Set API key to Mandrill instance
   * @param {String} apiKey Mandrill API key
   * @returns {MandrillMailer}
   */
  setApiKey: function (apiKey) {
    this._apiKey = apiKey;
    return this;
  },

  /**
   * Get created mandrill client
   * @returns {Mandrill}
   */
  getClient: function () {
    return this._client;
  },

  /**
   * Create mandrill client
   * @returns {MandrillMailer}
   */
  createClient: function () {
    this._client = new mandrill.Mandrill(this.getApiKey());
    return this;
  },

  /**
   * Send mail to recipient
   * @returns {Promise}
   */
  send: function () {
    var defer = Q.defer();

    this.getClient().messages.send({
      message: {},
      async: true,
      ip_pool: "Main Pool",
      send_at: Date.now()
    }, function (result) {
      defer.resolve(result);
    }, function (error) {
      defer.reject(error);
    });

    return defer.promise;
  }
});

module.exports = MandrillMailer;
