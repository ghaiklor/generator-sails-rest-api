import pusher from 'sails-service-pusher';

export default {
  android: pusher.create('android', sails.config.services.pusher.android),
  ios: pusher.create('ios', sails.config.services.pusher.ios)
}
