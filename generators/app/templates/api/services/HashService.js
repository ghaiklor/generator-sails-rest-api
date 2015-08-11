var hashes = require('sails-service-hash');

module.exports = {
  bcrypt: hashes.create('bcrypt', sails.config.services.hash.bcrypt)
};
