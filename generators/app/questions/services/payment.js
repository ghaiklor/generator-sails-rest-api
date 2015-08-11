module.exports = [{
  type: 'list',
  name: 'services:payment:provider',
  message: 'Which type of payment providers you want to use',
  default: 'Stripe',
  choices: [
    'BrainTree',
    'Stripe'
  ]
}];
