const Generator = require('yeoman-generator')
const generatorSteps = require('./steps')
const generatorArguments = require('./arguments')

module.exports = class TrailpackGenerator extends Generator {
  constructor(args, options) {
    super(args, options)

    this.option('new')
    Object.entries(generatorArguments).forEach(([ arg, desc ]) => this.argument(arg, desc))
  }

  get configuring () {
    return generatorSteps.configuring
  }

  get conflicts () {
    return generatorSteps.conflicts
  }

  get end () {
    return generatorSteps.end
  }

  get initializing () {
    return generatorSteps.initializing
  }

  get install () {
    return generatorSteps.install
  }

  get prompting () {
    return generatorSteps.prompting
  }

  get writing () {
    return generatorSteps.writing
  }
}
