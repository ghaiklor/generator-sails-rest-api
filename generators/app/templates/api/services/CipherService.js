var ciphers = require('sails-service-cipher');

module.exports = {
  jwt: ciphers('jwt', {secretKey: "<%= answers['application:secret'] %>"})
};
