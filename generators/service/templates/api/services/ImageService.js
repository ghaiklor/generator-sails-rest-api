"use strict";

const image = require('sails-service-image');
const config = require('../../config/services/image');

module.exports = image('<%= options["image-provider"] %>', config.services.image);
