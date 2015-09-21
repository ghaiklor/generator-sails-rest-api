import sms from 'sails-service-sms';

export default sms.create("<%= options['sms-provider'] %>", sails.config.services.sms);
