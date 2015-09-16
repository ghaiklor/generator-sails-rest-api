function _whenMailerServiceChosen(answers) {
  return !(answers['services:chosen'].indexOf('MailerService') === -1);
}

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
  ],
  when: _whenMailerServiceChosen
}];
