module.exports = [{
    type: 'confirm',
    name: 'docs:include',
    message: 'Is Swagger documentation needed for project?',
    default: true
}, {
    type: 'confirm',
    name: 'tests:include',
    message: 'Is Mocha tests needed for project?',
    default: true
}, {
    type: 'confirm',
    name: 'tools:include',
    message: 'Is diagnostic tools needed for project?',
    default: true
}];
