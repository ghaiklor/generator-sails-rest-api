var hashes = require('sails-service-hash');

module.exports = {
  bcrypt: hashes.create('bcrypt', {})
};
