/**
 * Exports object that contains each of priority steps of yeoman run loop
 */

const configuringSteps = require('./configuring')
const endSteps = require('./end')
const initializingSteps = require('./initializing')
const installSteps = require('./install')
const promptingSteps = require('./prompting')
const writingSteps = require('./writing')

module.exports = {
  configuring: configuringSteps,
  end: endSteps,
  initializing: function () {
    Object.keys(initializingSteps).forEach(key => initializingSteps[key].bind(this)())
  },
  install: installSteps,
  prompting: promptingSteps,
  writing: function () {
    Object.keys(writingSteps).forEach(key => writingSteps[key].bind(this)())
  }
}
