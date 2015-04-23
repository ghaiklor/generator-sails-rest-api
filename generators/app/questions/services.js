// TODO: fill with correct questions when service structure will be done
module.exports = [{
  type: 'list',
  name: 'services:cipher',
  message: 'Default cipher service',
  default: 0,
  choices: [
    'bcrypt',
    'JWT'
  ]
}, {
  type: 'list',
  name: 'services:mailer',
  message: 'Default mailer service',
  default: 0,
  choices: [
    'Mandrill'
  ]
}, {
  type: 'list',
  name: 'services:payment',
  message: 'Default payment service',
  default: 0,
  choices: [
    'Stripe'
  ]
}, {
  type: 'list',
  name: 'services:sms',
  message: 'Default SMS service',
  default: 0,
  choices: [
    'Twilio'
  ]
}, {
  type: 'list',
  name: 'services:storage',
  message: 'Default storage service',
  default: 0,
  choices: [
    'Amazon S3',
    'Google Cloud Storage'
  ]
}];
