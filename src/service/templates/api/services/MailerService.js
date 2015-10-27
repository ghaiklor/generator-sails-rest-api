import mailer from 'sails-service-mailer';
import config from '../../config/services/mailer';

export default mailer('<%= options["mailer-provider"] %>', config.services.mailer);
