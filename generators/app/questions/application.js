var crypto = require('crypto');

module.exports = [{
  type: 'input',
  name: 'application:name',
  message: 'Type your application name',
  default: 'sails-rest-api'
}, {
  type: 'input',
  name: 'application:secret',
  message: 'Type your secret for this application',
  default: crypto.randomBytes(32).toString('hex')
}];
