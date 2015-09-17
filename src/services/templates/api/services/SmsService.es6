import sms from 'sails-service-sms';

export default sms.create("<%= answers['services:sms:provider'] %>", sails.config.services.sms);
