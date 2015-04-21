// TODO: fill with correct questions when service structure will be done
module.exports = [{
  type: 'list',
  name: 'services:cipher',
  message: 'Choose Cipher by default',
  default: 0,
  choices: [
    'bcrypt',
    'JWT'
  ]
}, {
  type: 'list',
  name: 'services:mailer',
  message: 'Choose Mailer by default',
  default: 0,
  choices: [
    'Mandrill'
  ]
}, {
  type: 'list',
  name: 'services:payment',
  message: 'Choose Payment by default',
  default: 0,
  choices: [
    'Stripe'
  ]
}, {
  type: 'list',
  // TODO: think how for example manage default PusherService.send() and PusherService.factory.create('Android').send()
  name: 'services:pusher',
  message: 'Choose Pusher by default',
  default: 0,
  choices: [
    'Apple Push Notification',
    'Google Cloud Messaging'
  ]
}, {
  type: 'list',
  name: 'services:sms',
  message: 'Choose SMS by default',
  default: 0,
  choices: [
    'Twilio'
  ]
}, {
  type: 'list',
  name: 'services:social',
  message: 'Choose Social by default',
  default: 0,
  choices: [
    'Facebook'
  ]
}, {
  type: 'list',
  name: 'services:storage',
  message: 'Choose Storage by default',
  default: 0,
  choices: [
    'Amazon S3',
    'Google Cloud Storage'
  ]
}];
