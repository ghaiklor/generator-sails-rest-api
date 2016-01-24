"use strict";

const storage = require('sails-service-storage');
const config = require('../../config/services/storage');

module.exports = storage('<%= options["storage-provider"] %>', config.services.storage);
