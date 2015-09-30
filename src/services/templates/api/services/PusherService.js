import pusher from 'sails-service-pusher';

export default {
  android: pusher('android', sails.config.services.pusher.android),
  ios: pusher('ios', sails.config.services.pusher.ios)
}
