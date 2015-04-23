var util = require('util');
var Q = require('q');
var jwt = require('jsonwebtoken');
var BaseCipher = require('./BaseCipher');

/**
 * Secret key for symmetric encoding
 * @type {String}
 * @private
 */
var SECRET_KEY = "<%= answers['application:jwt-secret'] %>";

/**
 * Algorithm that using for signing JWT
 * @type {String}
 * @private
 */
var ALGORITHM = "HS512";

/**
 * Time interval in minutes when token will be expired or false if not expires
 * @type {Number}
 * @private
 */
var EXPIRES_IN_MINUTES = 60 * 24;

util.inherits(JwtCipher, BaseCipher);

/**
 * Create new JWT Cipher instance
 * @constructor
 */
function JwtCipher() {
  // TODO: think about token and payload attributes in object
  BaseCipher.apply(this, arguments);
}

/**
 * Sign payload with JSON Web Token
 * @param {Object} [_options] Specify options for jwt.sign
 * @returns {String} Returns JSON Web Token in string format
 */
JwtCipher.prototype.hashSync = function (_options) {
  var options = _options || {};
  options.algorithm = options.algorithm || ALGORITHM;
  options.expiresInMinutes = options.expiresInMinutes || EXPIRES_IN_MINUTES;

  return jwt.sign(this.getContent(), SECRET_KEY, options);
};

/**
 * Decode token in async mode
 * @returns {Object}
 */
JwtCipher.prototype.decode = function (_options) {
  var options = _options || {};
  var defer = Q.defer();

  jwt.verify(this.getContent(), SECRET_KEY, options, function (error, decoded) {
    if (error) {
      defer.reject(error);
    } else {
      defer.resolve(decoded);
    }
  });

  return defer.promise;
};

/**
 * Decode token in sync mode
 * @param _options
 * @returns {*}
 */
JwtCipher.prototype.decodeSync = function (_options) {
  var options = _options || {};
  return jwt.verify(this.getContent(), SECRET_KEY, options);
};

module.exports = JwtCipher;
