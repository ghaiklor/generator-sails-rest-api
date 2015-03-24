var crypto = require('crypto');

module.exports = [{
  type: 'input',
  name: 'application:name',
  message: 'Type your application name',
  default: 'sails-rest-api'
}, {
  type: 'input',
  name: 'application:api-secret-key',
  message: 'Type your private API key',
  default: crypto.randomBytes(32).toString('hex')
}, {
  type: 'input',
  name: 'application:jwt-secret-key',
  message: 'Type your private key for JSON Web Token',
  default: crypto.randomBytes(32).toString('hex')
}];
