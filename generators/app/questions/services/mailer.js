module.exports = [{
  type: 'list',
  name: 'services:mailer:provider',
  message: 'Which type of mailer providers you want to use',
  default: 'sendmail',
  choices: [
    'direct',
    'SendGrid',
    'sendmail',
    'SES',
    'SMTP',
    'stub'
  ]
}];
