var apn = require('apn');
var extend = require('node.extend');
var util = require('util');
var BasePushNotification = require('./BasePushNotification');
//connection = new apn.Connection({
//    cert: '',
//    key: ''
//}).on('error', onError).on('transmissionError', onError);

util.inherits(APNPushNotification, BasePushNotification);

/**
 * Create new APN Push Notification
 * @param {Object} options
 * @returns {APNPushNotification}
 * @constructor
 */
function APNPushNotification(options) {
  BasePushNotification.apply(this, arguments);

  options = extend(true, {}, {
    device: '',
    notification: {
      aps: {
        alert: "\uD83D\uDCE7 \u2709 You have a new message from Hitch Radio",
        sound: 'ping.aiff',
        badge: 1
      },
      payload: {}
    }
  }, options);

  this.device = new apn.Device(options.device);
  this.notification = new apn.Notification(options.notification);
}

/**
 * Send push notification to device
 * @returns {APNPushNotification}
 */
APNPushNotification.prototype.send = function () {
  connection.pushNotification(this.notification, this.device);
  return this;
};

module.exports = APNPushNotification;
