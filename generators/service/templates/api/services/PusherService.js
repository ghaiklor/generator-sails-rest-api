"use strict";

const pusher = require('sails-service-pusher');
const config = require('../../config/services/pusher');

module.exports = {
  android: pusher('android', config.services.pusher.android),
  ios: pusher('ios', config.services.pusher.ios)
};
