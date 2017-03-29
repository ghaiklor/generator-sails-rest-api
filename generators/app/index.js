const Generator = require('yeoman-generator')
const generatorOptions = require('./options')
const generatorSteps = require('./steps')

module.exports = class AppGenerator extends Generator {
  constructor(args, options) {
    super(args, options)

    Object.keys(generatorOptions).forEach(key => this.option(key, generatorOptions[key]))
  }

  get initializing () {
    return generatorSteps.initializing
  }

  get configuring () {
    return generatorSteps.configuring
  }

  get prompting () {
    return generatorSteps.prompting
  }

  get writing () {
    return generatorSteps.writing
  }

  get install () {
    return generatorSteps.install
  }

  get end () {
    return generatorSteps.end
  }
}
