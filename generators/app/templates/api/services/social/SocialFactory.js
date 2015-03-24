var Facebook = require('./FacebookSocial');

/**
 * SocialFactory class
 * @constructor
 */
function SocialFactory() {
}

SocialFactory.prototype = Object.create({
  constructor: SocialFactory,

  /**
   * Create new social instance based on type
   * @param {String} type Type of social instance
   * @param {Object} options Config for social instance
   * @returns {*}
   */
  create: function (type, options) {
    switch (type) {
      case 'facebook':
        return this.createFacebook(options);
      default:
        throw new Error('Unrecognized type -> ' + type);
    }
  },

  /**
   * Create new Facebook instance
   * @param {Object} options Config with userId and accessToken properties
   * @returns {Facebook}
   */
  createFacebook: function (options) {
    return new Facebook(options);
  }
});

module.exports = SocialFactory;
