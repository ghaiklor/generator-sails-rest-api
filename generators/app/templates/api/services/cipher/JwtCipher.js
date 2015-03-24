var util = require('util');
var Q = require('q');
var jwt = require('jsonwebtoken');
var BaseCipher = require('./BaseCipher');

/**
 * Secret key for symmetric encoding
 * @type {String}
 * @private
 */
var SECRET_KEY = "<%= answers['application:jwt-secret-key'] %>";

/**
 * Algorithm that using for signing JWT
 * @type {String}
 * @private
 */
var ALGORITHM = "HS256";

/**
 * Time interval in minutes when token will be expired or false if not expires
 * @type {Number}
 * @private
 */
var EXPIRES = 60 * 24;

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
 * @returns {String} Returns JSON Web Token in string format
 */
JwtCipher.prototype.hashSync = function () {
  return jwt.sign(this.getContent(), SECRET_KEY, {
    algorithm: ALGORITHM,
    expiresInMinutes: EXPIRES
  });
};

/**
 * Verify token and returns decoded payload
 * @returns {Promise}
 */
JwtCipher.prototype.verify = function () {
  var defer = Q.defer();

  jwt.verify(this.getContent(), SECRET_KEY, function (error, decoded) {
    if (error) {
      defer.reject(error);
    } else {
      defer.resolve(decoded);
    }
  });

  return defer.promise;
};

/**
 * Decode token without verification
 * @returns {Object}
 */
JwtCipher.prototype.decodeSync = function () {
  return jwt.decode(this.getContent());
};

module.exports = JwtCipher;
