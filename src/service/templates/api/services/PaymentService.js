import payment from 'sails-service-payment';
import config from '../../config/services/payment';

export default payment('<%= options["payment-provider"] %>', config.services.payment);
