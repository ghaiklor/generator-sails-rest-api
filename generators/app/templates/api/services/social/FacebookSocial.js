var Q = require('q');
var fb = require('fb');

/**
 * Facebook class
 * @param {Object} options Config with userId and accessToken properties
 * @constructor
 */
function Facebook(options) {
  if (!(options || options.userId || options.accessToken)) {
    throw new Error('You must provide userId and accessKey');
  }

  this.setUserId(options.userId);
  this.setAccessToken(options.accessToken);
}

Facebook.prototype = Object.create({
  constructor: Facebook,

  /**
   * Get facebook friends
   * @returns {Promise}
   */
  getFriends: function () {
    var defer = Q.defer();

    fb.setAccessToken(this.getAccessToken());
    fb.api(this.getUserId() + '/friends', function (response) {
      if (response.error) {
        defer.reject(response.error);
      } else {
        defer.resolve(response.data);
      }
    });

    return defer.promise;
  },

  /**
   * Get user's facebook id
   * @returns {String}
   */
  getUserId: function () {
    return this.userId;
  },

  /**
   * Set new user's facebook id
   * @param {String} id User's facebook id
   * @returns {Facebook}
   */
  setUserId: function (id) {
    this.userId = id;
    return this;
  },

  /**
   * Get current access token
   * @returns {String}
   */
  getAccessToken: function () {
    return this.accessToken;
  },

  /**
   * Set new facebook access token
   * @param {String} token New facebook access token
   * @returns {Facebook}
   */
  setAccessToken: function (token) {
    this.accessToken = token;
    return this;
  }
});

module.exports = Facebook;
