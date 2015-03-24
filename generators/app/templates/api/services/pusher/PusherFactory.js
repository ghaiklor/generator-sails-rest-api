var APNPushNotification = require('./APNPushNotification');
var GCMPushNotification = require('./GCMPushNotification');

/**
 * Create factory for Push Notification
 * @constructor
 */
function PusherFactory() {
}

PusherFactory.prototype = Object.create({
  constructor: PusherFactory,

  /**
   * Create new Pusher instance
   * @param {String} type Type of notification
   * @param {Object} options Unified options for push notification
   * @returns {*}
   */
  create: function (type, options) {
    switch (type) {
      case 'ios':
        return this.createIosPush(options);
      case 'android':
        return this.createAndroidPush(options);
      default:
        throw new Error('Unrecognized type');
    }
  },

  /**
   * Create push notification for iOS
   * @param {Object} options Options for push notification
   * @returns {APNPushNotification}
   */
  createIosPush: function (options) {
    return new APNPushNotification(options);
  },

  /**
   * Create push notification for Android
   * @param {Object} options Options for push notification
   * @returns {GCMPushNotification}
   */
  createAndroidPush: function (options) {
    return new GCMPushNotification(options);
  }
});

module.exports = PusherFactory;
