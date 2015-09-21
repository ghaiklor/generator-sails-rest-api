import mailer from 'sails-service-mailer';

export default mailer.create("<%= options['mailer-provider'] %>", sails.config.services.mailer);
