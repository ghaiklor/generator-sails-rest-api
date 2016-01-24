"use strict";

const location = require('sails-service-location');
const config = require('../../config/services/location');

module.exports = location('<%= options["location-provider"] %>', config.services.location);
