import mailer from 'sails-service-mailer';

export default mailer.create("<%= answers['services:mailer:provider'] %>", sails.config.services.mailer);
