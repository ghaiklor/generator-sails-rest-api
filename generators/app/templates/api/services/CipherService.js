var ciphers = require('sails-service-cipher');

module.exports = {
  jwt: ciphers.create('jwt', {secretKey: "<%= answers['application:secret'] %>"})
};
