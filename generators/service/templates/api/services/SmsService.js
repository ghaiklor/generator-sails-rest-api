"use strict";

const sms = require('sails-service-sms');
const config = require('../../config/services/sms');

module.exports = sms('<%= options["sms-provider"] %>', config.services.sms);
