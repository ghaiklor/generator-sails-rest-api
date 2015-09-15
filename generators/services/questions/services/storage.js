function _whenStorageServiceChosen(answers) {
  return !(answers['services:chosen'].indexOf('StorageService') === -1);
}

module.exports = [{
  type: 'list',
  name: 'services:storage:provider',
  message: 'Which type of storage providers you want to use',
  default: 'Amazon',
  choices: [
    'Amazon',
    'Local'
  ],
  when: _whenStorageServiceChosen
}];
