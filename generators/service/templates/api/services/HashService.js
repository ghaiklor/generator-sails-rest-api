"use strict";

const hash = require('sails-service-hash');
const config = require('../../config/services/hash');

module.exports = {
  bcrypt: hash('bcrypt', config.services.hash.bcrypt)
};
