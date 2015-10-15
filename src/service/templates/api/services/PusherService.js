import pusher from 'sails-service-pusher';

export const android = pusher('android', sails.config.services.pusher.android);
export const ios = pusher('ios', sails.config.services.pusher.ios);
