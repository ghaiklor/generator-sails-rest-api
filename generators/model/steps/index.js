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
  initializing: initializingSteps,
  install: installSteps,
  prompting: promptingSteps,
  writing: writingSteps
}
