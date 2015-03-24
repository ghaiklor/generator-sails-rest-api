var Q = require('q');
var util = require('util');
var extend = require('node.extend');
var gcm = require('node-gcm');
var BasePushNotification = require('./BasePushNotification');

util.inherits(GCMPushNotification, BasePushNotification);

/**
 * Create new push notification to Android devices
 * @param {Object} options
 * @constructor
 */
function GCMPushNotification(options) {
  BasePushNotification.apply(this, arguments);

  options = extend(true, {}, {
    devices: [],
    message: {
      collapseKey: 'demo',
      delayWhileIdle: true,
      timeToLive: 3,
      data: {
        hitch: 'test'
      }
    }
  }, options);

  this.devices = options.devices;

  this.sender = new gcm.Sender();
  this.message = new gcm.Message(options.message);
}

/**
 * Send notification to device
 */
GCMPushNotification.prototype.send = function () {
  var defer = Q.defer();

  this.sender.send(this.message, [], 4, function (error, result) {
    if (error) {
      defer.reject(error);
    } else {
      defer.resolve(result);
    }
  });

  return defer.promise;
};

module.exports = GCMPushNotification;
