module.exports = [{
  type: 'list',
  name: 'services:image:provider',
  message: 'Which type of image providers you want to use',
  default: 'GM',
  choices: [
    'GM',
    'IM'
  ]
}];
