/**
 * Implement message
 * @type {String}
 * @private
 */
var IMPLEMENT_MESSAGE = "This method need to implement";

function BasePushNotification(options) {
  this.token = options.token;
  this.notification = options.notification;
}

BasePushNotification.prototype = Object.create({
  constructor: BasePushNotification,

  getDeviceToken: function () {
    return this.token;
  },

  setDeviceToken: function (token) {
    this.token = token;
    return this;
  },

  getNotification: function () {
    return this.notification;
  },

  setNotification: function (notification) {
    this.notification = notification;
    return this;
  },

  send: function () {
    throw new Error(IMPLEMENT_MESSAGE);
  }
});

module.exports = BasePushNotification;
