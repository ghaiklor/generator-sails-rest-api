var crypto = require('crypto');

module.exports = [{
  type: 'input',
  name: 'application:secret',
  message: 'Type your secret for this application',
  default: crypto.randomBytes(32).toString('hex')
}];
