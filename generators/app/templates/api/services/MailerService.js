var MailerFactory = require('./mailer/MailerFactory');

module.exports = new MailerFactory().create("<%= answers['services:mailer'] %>");
module.exports.Factory = new MailerFactory();
