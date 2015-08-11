module.exports = [{
  type: 'list',
  name: 'services:storage:provider',
  message: 'Which type of storage providers you want to use',
  default: 'Amazon',
  choices: [
    'Amazon',
    'Local'
  ]
}];
