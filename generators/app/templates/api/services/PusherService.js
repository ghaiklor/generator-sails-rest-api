var pushes = require('sails-service-pusher');

module.exports = {
  android: pushes.create('android', sails.config.services.pusher.android),
  ios: pushes.create('ios', sails.config.services.pusher.ios)
};
