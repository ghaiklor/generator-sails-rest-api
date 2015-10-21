import sms from 'sails-service-sms';

export default sms('<%= options["sms-provider"] %>', sails.config.services.sms);
