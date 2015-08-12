var pushes = require('sails-service-pusher');

module.exports = {
  android: pushes.create('android', {}),
  ios: pushes.create('ios', {})
};
