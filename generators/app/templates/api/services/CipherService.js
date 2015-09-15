var ciphers = require('sails-service-cipher');

module.exports = {
  jwt: ciphers.create('jwt', sails.config.services.cipher.jwt)
};
