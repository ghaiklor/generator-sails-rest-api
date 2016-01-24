"use strict";

const cipher = require('sails-service-cipher');
const config = require('../../config/services/cipher');

module.exports = {
  jwt: cipher('jwt', config.services.cipher.jwt)
};
