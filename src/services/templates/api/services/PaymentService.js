import payment from 'sails-service-payment';

export default payment.create("<%= options['payment-provider'] %>", sails.config.services.payment);
