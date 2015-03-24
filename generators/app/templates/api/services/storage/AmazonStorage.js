var util = require('util');
var Q = require('q');
var aws = require('aws-sdk');
var BaseStorage = require('./BaseStorage');

util.inherits(AmazonStorage, BaseStorage);

/**
 * Create new Amazon storage instance
 * @param {Object} options Config with accessKeyId and secretAccessKey properties
 * @constructor
 * @returns {AmazonStorage}
 */
function AmazonStorage(options) {
  BaseStorage.apply(this, arguments);

  if (!(options.accessKeyId || options.secretAccessKey)) {
    throw new Error('You must provide tokens');
  }

  this.S3 = new aws.S3({
    accessKeyId: options.accessKeyId,
    secretAccessKey: options.secretAccessKey
  });
}

/**
 * Save file to Amazon bucket
 * @param {Object} options Object with Bucket, Key and Body properties
 * @returns {Promise}
 */
AmazonStorage.prototype.upload = function (options) {
  var defer = Q.defer();

  this.S3.putObject({
    Bucket: options.bucket,
    Key: options.key,
    Body: options.body
  }, function (error, data) {
    if (error) {
      defer.reject(error);
    } else {
      defer.resolve(data);
    }
  });

  return defer.promise;
};

/**
 * Get file from Amazon bucket
 * @param {Object} options Config with Bucket and Key properties
 * @returns {Promise}
 */
AmazonStorage.prototype.get = function (options) {
  var defer = Q.defer();

  this.S3.getObject({
    Bucket: options.bucket,
    Key: options.key
  }, function (error, data) {
    if (error) {
      defer.reject(error);
    } else {
      defer.resolve(data);
    }
  });

  return defer.promise;
};

/**
 * Remove file from Amazon bucket
 * @param {Object} options Config with Bucket and Key properties
 * @returns {Promise}
 */
AmazonStorage.prototype.remove = function (options) {
  var defer = Q.defer();

  this.S3.deleteObject({
    Bucket: options.bucket,
    Key: options.key
  }, function (error, data) {
    if (error) {
      defer.reject(error);
    } else {
      defer.resolve(data);
    }
  });

  return defer.promise;
};

/**
 * Get signed url for object in Amazon bucket
 * @param {Object} options Config with Bucket and Key properties
 * @returns {Promise}
 */
AmazonStorage.prototype.getSignedUrl = function (options) {
  var defer = Q.defer();

  this.S3.getSignedUrl('getObject', {
    Bucket: options.bucket,
    Key: options.key
  }, function (error, url) {
    if (error) {
      defer.reject(error);
    } else {
      defer.resolve(url);
    }
  });

  return defer.promise;
};

module.exports = AmazonStorage;
