/**
 * Exports object contains each priority step for yeoman run loop
 */

module.exports = {
    configuring: require('./configuring'),
    conflicts: require('./conflicts'),
    end: require('./end'),
    initializing: require('./initializing'),
    install: require('./install'),
    prompting: require('./prompting'),
    writing: require('./writing')
};
