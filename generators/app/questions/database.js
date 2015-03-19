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
        'OrientDB'
    ]
}, {
    type: 'input',
    name: 'database:host',
    message: 'Type your database host',
    default: 'localhost'
}, {
    type: 'input',
    name: 'database:name',
    message: 'Type your database name',
    default: 'sails-rest-api'
}, {
    type: 'input',
    name: 'database:username',
    message: 'Type your database username',
    default: ''
}, {
    type: 'password',
    name: 'database:password',
    message: 'Type your database password',
    default: ''
}];
