import mailer from 'sails-service-mailer';

export default mailer('<%= options["mailer-provider"] %>', sails.config.services.mailer);
