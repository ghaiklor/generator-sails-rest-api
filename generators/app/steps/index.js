'use strict'

/**
 * Exports object that contains each of priority steps of yeoman run loop
 */

const configuringSteps = require('./configuring')
const conflictsSteps = require('./conflicts')
const defaultSteps = require('./default')
const endSteps = require('./end')
const initializingSteps = require('./initializing')
const installSteps = require('./install')
const promptingSteps = require('./prompting')
const writingSteps = require('./writing')

module.exports = {
  configuring: configuringSteps,
  conflicts: conflictsSteps,
  default: defaultSteps,
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
