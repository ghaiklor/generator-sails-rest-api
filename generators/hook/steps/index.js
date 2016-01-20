/**
 * Exports object that contains each of priority steps of yeoman run loop
 */

module.exports = {
  configuring: require('./configuring'),
  conflicts: require('./conflicts'),
  default: require('./default'),
  end: require('./end'),
  initializing: require('./initializing'),
  install: require('./install'),
  prompting: require('./prompting'),
  writing: require('./writing')
};
