module.exports = [{
  type: 'checkbox',
  name: 'services:cipher',
  message: 'Choose which Cipher services you want',
  default: [],
  choices: [{
    name: 'BCrypt',
    checked: true
  }, {
    name: 'JWT',
    checked: true
  }]
}, {
  type: 'checkbox',
  name: 'services:mailer',
  message: 'Choose which Mailer services you want',
  default: [],
  choices: [{
    name: 'Mandrill',
    checked: false
  }]
}, {
  type: 'checkbox',
  name: 'services:payment',
  message: 'Choose which Payment services you want',
  default: [],
  choices: [{
    name: 'Stripe',
    checked: false
  }]
}, {
  type: 'checkbox',
  name: 'services:pusher',
  message: 'Choose which Pusher services you want',
  default: [],
  choices: [{
    name: 'Apple Push Notification',
    checked: false
  }, {
    name: 'Google Cloud Messaging',
    checked: false
  }]
}, {
  type: 'checkbox',
  name: 'services:sms',
  message: 'Choose which SMS services you want',
  default: [],
  choices: [{
    name: 'Twilio',
    checked: false
  }]
}, {
  type: 'checkbox',
  name: 'services:social',
  message: 'Choose which Social services you want',
  default: [],
  choices: [{
    name: 'Facebook',
    checked: false
  }]
}, {
  type: 'checkbox',
  name: 'services:storage',
  message: 'Choose which Storage services you want',
  default: [],
  choices: [{
    name: 'Amazon S3',
    checked: false
  }, {
    name: 'Google Cloud Storage',
    checked: false
  }]
}];
