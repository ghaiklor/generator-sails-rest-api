import payment from 'sails-service-payment';

export default payment('<%= options["payment-provider"] %>', sails.config.services.payment);
