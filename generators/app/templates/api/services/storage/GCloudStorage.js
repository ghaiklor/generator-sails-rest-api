var fs = require('fs');
var util = require('util');
var Q = require('q');
var gcloud = require('gcloud');
var BaseStorage = require('./BaseStorage');

util.inherits(GCloudStorage, BaseStorage);

/**
 * GCloud Storage class
 * @param {Object} options
 * @constructor
 */
function GCloudStorage(options) {
  BaseStorage.apply(this, arguments);

  this.setKeyFilename(options.keyFilename);
  this.setProjectId(options.projectId);
}

/**
 * Upload file to GCloud Storage
 * @param {Object} options Object with `bucket`, `key` and `source` properties
 * @returns {promise}
 */
GCloudStorage.prototype.upload = function (options) {
  var defer = Q.defer();
  var bucket = this._getProject().storage().bucket(options.bucket);
  var file = bucket.file(options.key);

  fs.createReadStream(options.body)
    .pipe(file.createWriteStream())
    .on('error', function (error) {
      defer.reject(error);
    })
    .on('end', function () {
      defer.resolve();
    });

  return defer.promise;
};

/**
 * Download file from GCloud Storage
 * @param {Object} options Object with `bucket` and `key` properties
 * @returns {promise}
 */
GCloudStorage.prototype.get = function (options) {
  var defer = Q.defer();
  var bucket = this._getProject().storage().bucket(options.bucket);
  var file = bucket.file(options.key);
  var buffer = '';

  file.createReadStream()
    .on('data', function (data) {
      buffer += data;
    })
    .on('end', function () {
      defer.resolve(new Buffer(buffer));
    })
    .on('error', function (error) {
      defer.reject(error);
    });

  return defer.promise;
};

/**
 * Remove file from GCloud Storage
 * @param {Object} options Options with `bucket` and `key` properties
 * @returns {promise}
 */
GCloudStorage.prototype.remove = function (options) {
  var defer = Q.defer();
  var bucket = this._getProject().storage().bucket(options.bucket);
  var file = bucket.file(options.key);

  file.delete(function (error) {
    if (error) {
      defer.reject(error);
    } else {
      defer.resolve();
    }
  });

  return defer.promise;
};

/**
 * Get gcloud project
 * @returns {*}
 * @private
 */
GCloudStorage.prototype._getProject = function () {
  return this._project;
};

/**
 * Set gcloud project
 * @param project
 * @returns {GCloudStorage}
 * @private
 */
GCloudStorage.prototype._setProject = function (project) {
  this._project = project;
  return this;
};

/**
 * Update project parameters after some changes
 * @returns {GCloudStorage}
 * @private
 */
GCloudStorage.prototype._updateProjectCredentials = function () {
  this._setProject(gcloud({
    keyFilename: this.getKeyFilename(),
    projectId: this.getProjectId()
  }));

  return this;
};

/**
 * Get project id from current google instance
 * @returns {String}
 */
GCloudStorage.prototype.getProjectId = function () {
  return this.projectId;
};

/**
 * Set project id
 * @param {String} id Google Cloud Project ID
 * @returns {GCloudStorage}
 */
GCloudStorage.prototype.setProjectId = function (id) {
  this.projectId = id;
  this._updateProjectCredentials();
  return this;
};

/**
 * Get key filename
 * @returns {String} Returns keyFilename from current instance
 */
GCloudStorage.prototype.getKeyFilename = function () {
  return this.keyFilename;
};

/**
 * Set key filename
 * @param {String} key keyFilename for google cloud storage
 * @returns {GCloudStorage}
 */
GCloudStorage.prototype.setKeyFilename = function (key) {
  this.keyFilename = key;
  this._updateProjectCredentials();
  return this;
};

module.exports = GCloudStorage;
