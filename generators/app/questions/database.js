module.exports = [{
  type: 'list',
  name: 'database:adapter',
  message: 'Choose database adapter',
  default: 2,
  choices: [
    'PostgreSQL',
    'MySQL',
    'Mongo',
    'Memory',
    'Disk',
    'SQLServer',
    'Redis',
    'OrientDB',
    'DynamoDB'
  ]
}, {
  type: 'input',
  name: 'database:host',
  message: 'Type your database host',
  default: 'localhost',
  when: function (answers) {
    return !(['PostgreSQL', 'MySQL', 'Mongo', 'SQLServer', 'Redis'].indexOf(answers['database:adapter']) === -1);
  }
}, {
  type: 'input',
  name: 'database:name',
  message: 'Type your database name',
  default: 'sails-rest-api',
  when: function (answers) {
    return !(['PostgreSQL', 'MySQL', 'Mongo', 'SQLServer', 'Redis', 'OrientDB'].indexOf(answers['database:adapter']) === -1);
  }
}, {
  type: 'input',
  name: 'database:username',
  message: 'Type your database username',
  default: '',
  when: function (answers) {
    return !(['PostgreSQL', 'MySQL', 'Mongo', 'SQLServer', 'OrientDB'].indexOf(answers['database:adapter']) === -1);
  }
}, {
  type: 'password',
  name: 'database:password',
  message: 'Type your database password',
  default: '',
  when: function (answers) {
    return !(['PostgreSQL', 'MySQL', 'Mongo', 'SQLServer', 'Redis', 'OrientDB'].indexOf(answers['database:adapter']) === -1);
  }
}, {
  type: 'input',
  name: 'database:access-key-id',
  message: 'Type your Access Key ID',
  default: '',
  when: function (answers) {
    return !(['DynamoDB'].indexOf(answers['database:adapter']) === -1);
  }
}, {
  type: 'input',
  name: 'database:secret-access-key',
  message: 'Type your Secret Access Key',
  default: '',
  when: function (answers) {
    return !(['DynamoDB'].indexOf(answers['database:adapter']) === -1);
  }
}, {
  type: 'input',
  name: 'database:region',
  message: 'Type your region',
  default: 'us-west-1',
  when: function (answers) {
    return !(['DynamoDB'].indexOf(answers['database:adapter']) === -1);
  }
}];
