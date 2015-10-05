/**
 * Exports array that contains questions for prompting.
 * The array with questions is an array of Inquirer prompt objects - https://github.com/SBoudrias/Inquirer.js#prompts-type
 *
 * @example
 * export default [{
 *   type: 'input',
 *   name: 'inputName',
 *   message: 'Message for the input'
 * }];
 */

export default [{
  type: 'list',
  name: 'database:adapter',
  message: 'Choose database adapter',
  default: 'Mongo',
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
  message: 'Database host',
  default: 'localhost',
  when: function (answers) {
    return !(['PostgreSQL', 'MySQL', 'Mongo', 'SQLServer', 'Redis', 'OrientDB'].indexOf(answers['database:adapter']) === -1);
  }
}, {
  type: 'input',
  name: 'database:name',
  message: 'Database name',
  default: 'sails-rest-api',
  when: function (answers) {
    return !(['PostgreSQL', 'MySQL', 'Mongo', 'SQLServer', 'Redis', 'OrientDB'].indexOf(answers['database:adapter']) === -1);
  }
}, {
  type: 'input',
  name: 'database:username',
  message: 'Database username',
  default: '',
  when: function (answers) {
    return !(['PostgreSQL', 'MySQL', 'Mongo', 'SQLServer', 'OrientDB'].indexOf(answers['database:adapter']) === -1);
  }
}, {
  type: 'password',
  name: 'database:password',
  message: 'Database password',
  default: '',
  when: function (answers) {
    return !(['PostgreSQL', 'MySQL', 'Mongo', 'SQLServer', 'Redis', 'OrientDB'].indexOf(answers['database:adapter']) === -1);
  }
}, {
  type: 'input',
  name: 'database:dynamo:access-key-id',
  message: 'DynamoDB Access Key ID',
  default: '',
  when: function (answers) {
    return !(['DynamoDB'].indexOf(answers['database:adapter']) === -1);
  }
}, {
  type: 'input',
  name: 'database:dynamo:secret-access-key',
  message: 'DynamoDB Secret Access Key',
  default: '',
  when: function (answers) {
    return !(['DynamoDB'].indexOf(answers['database:adapter']) === -1);
  }
}, {
  type: 'input',
  name: 'database:dynamo:region',
  message: 'DynamoDB region',
  default: 'us-west-1',
  when: function (answers) {
    return !(['DynamoDB'].indexOf(answers['database:adapter']) === -1);
  }
}];
