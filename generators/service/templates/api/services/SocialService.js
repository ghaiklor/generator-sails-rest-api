"use strict";

const social = require('sails-service-social');
const config = require('../../config/services/social');

module.exports = {
  facebook: social('facebook', config.services.social.facebook)
};
