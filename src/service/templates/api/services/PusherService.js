import pusher from 'sails-service-pusher';
import config from '../../config/services/pusher';

export default {
  android: pusher('android', config.services.pusher.android),
  ios: pusher('ios', config.services.pusher.ios)
}
