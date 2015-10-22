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

const whenDatabaseIsChosen = databases => answers => databases.indexOf(answers['config:database-adapter']) !== -1;

export default [{
  type: 'list',
  name: 'config:database-adapter',
  message: 'Database adapter',
  default: 'Mongo',
  choices: [
    'Mongo',
    'Redis',
    'PostgreSQL',
    'MySQL',
    'SQLServer',
    'OrientDB',
    'DynamoDB',
    'FileMaker',
    'Memory',
    'Disk'
  ]
}, {
  type: 'input',
  name: 'config:database-host',
  message: 'Database host',
  default: 'localhost',
  when: whenDatabaseIsChosen(['Mongo', 'Redis', 'PostgreSQL', 'MySQL', 'SQLServer', 'OrientDB', 'FileMaker'])
}, {
  type: 'input',
  name: 'config:database-name',
  message: 'Database name',
  default: 'sails-rest-api',
  when: whenDatabaseIsChosen(['Mongo', 'Redis', 'PostgreSQL', 'MySQL', 'SQLServer', 'OrientDB', 'FileMaker'])
}, {
  type: 'input',
  name: 'config:database-username',
  message: 'Database username',
  default: '',
  when: whenDatabaseIsChosen(['Mongo', 'PostgreSQL', 'MySQL', 'SQLServer', 'OrientDB', 'FileMaker'])
}, {
  type: 'password',
  name: 'config:database-password',
  message: 'Database password',
  default: '',
  when: whenDatabaseIsChosen(['Mongo', 'Redis', 'PostgreSQL', 'MySQL', 'SQLServer', 'OrientDB', 'FileMaker'])
}, {
  type: 'input',
  name: 'config:dynamo-access-key-id',
  message: 'DynamoDB Access Key ID',
  default: '',
  when: whenDatabaseIsChosen(['DynamoDB'])
}, {
  type: 'input',
  name: 'config:dynamo-secret-access-key',
  message: 'DynamoDB Secret Access Key',
  default: '',
  when: whenDatabaseIsChosen(['DynamoDB'])
}, {
  type: 'input',
  name: 'config:dynamo-region',
  message: 'DynamoDB region',
  default: 'us-west-1',
  when: whenDatabaseIsChosen(['DynamoDB'])
}, {
  type: 'confirm',
  name: 'config:cors',
  message: 'Enable CORS?',
  default: false
}];
