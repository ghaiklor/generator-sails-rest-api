module.exports = [{
  type: 'list',
  name: 'services:cipher',
  message: 'Default cipher service',
  default: 0,
  choices: [
    'JWT'
  ]
}, {
  type: 'input',
  name: 'services:jwt:secret-key',
  message: 'Type your secret or key',
  default: 'DEFAULT_SECRET_KEY',
  when: function (answers) {
    return !(['JWT'].indexOf(answers['services:cipher']) === -1);
  }
}, {
  type: 'list',
  name: 'services:hash',
  message: 'Default hash service',
  default: 0,
  choices: [
    'bcrypt',
    'md5'
  ]
}, {
  type: 'list',
  name: 'services:mailer',
  message: 'Default mailer service',
  default: 0,
  choices: [
    'sendmail',
    'Mandrill',
    'Amazon'
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
