import payment from 'sails-service-payment';

export default payment.create("<%= answers['services:payment:provider'] %>", sails.config.services.payment);
