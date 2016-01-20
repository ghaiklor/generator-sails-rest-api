import sms from 'sails-service-sms';
import config from '../../config/services/sms';

export default sms('<%= options["sms-provider"] %>', config.services.sms);
