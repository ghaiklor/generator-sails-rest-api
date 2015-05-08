module.exports = [{
  type: 'list',
  name: 'services:cipher',
  message: 'Default cipher service',
  default: 0,
  choices: [
    'JWT'
  ]
}, {
  type: 'list',
  name: 'services:hash',
  message: 'Default hash service',
  default: 0,
  choices: [
    'bcrypt'
  ]
}, {
  type: 'list',
  name: 'services:mailer',
  message: 'Default mailer service',
  default: 2,
  choices: [
    'Mandrill',
    'Amazon',
    'sendmail'
  ]
}, {
  type: 'list',
  name: 'services:payment',
  message: 'Default payment service',
  default: 0,
  choices: [
    'Stripe',
    'PayPal'
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
    'Amazon',
    'GCloud'
  ]
}];
