var AmazonStorage = require('./AmazonStorage');
var GCloudStorage = require('./GCloudStorage');

/**
 * Storage factory class
 * @constructor
 */
function StorageFactory() {
}

StorageFactory.prototype = Object.create({
  constructor: StorageFactory,

  /**
   * Create new storage instance
   * @param {String} type Type of storage
   * @param {Object} options Config for storage
   * @returns {*} Returns created instance of storage
   */
  create: function (type, options) {
    switch (type) {
      case 'amazon':
        return this.createAmazon(options);
      case 'gcloud':
        return this.createGCloud(options);
      default:
        throw new Error('Unrecognized type -> ' + type);
    }
  },

  /**
   * Create Amazon storage instance
   * @param {Object} options Config with accessKeyId and secretAccessKey properties
   * @returns {AmazonStorage}
   */
  createAmazon: function (options) {
    return new AmazonStorage(options);
  },

  /**
   * Create GCloud storage instance
   * @param {Object} options Config with keyFilename and projectId properties
   * @returns {GCloudStorage}
   */
  createGCloud: function (options) {
    return new GCloudStorage(options);
  }
});

module.exports = StorageFactory;
