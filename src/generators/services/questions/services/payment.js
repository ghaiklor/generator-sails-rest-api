function _whenPaymentServiceChosen(answers) {
  return !(answers['services:chosen'].indexOf('PaymentService') === -1);
}

module.exports = [{
  type: 'list',
  name: 'services:payment:provider',
  message: 'Which type of payment providers you want to use',
  default: 'Stripe',
  choices: [
    'BrainTree',
    'Stripe'
  ],
  when: _whenPaymentServiceChosen
}];
