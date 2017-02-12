'use strict'

const Generator = require('yeoman-generator')
const generatorArguments = require('./arguments')
const generatorOptions = require('./options')
const generatorSteps = require('./steps')

module.exports = class AppGenerator extends Generator {
  constructor(args, options) {
    super(args, options)

    Object.keys(generatorArguments).forEach(key => this.argument(key, generatorArguments[key]))
    Object.keys(generatorOptions).forEach(key => this.option(key, generatorOptions[key]))
  }

  configuring() {
    return generatorSteps.configuring.bind(this)()
  }

  conflicts() {
    return generatorSteps.conflicts.bind(this)()
  }

  default() {
    return generatorSteps.default.bind(this)()
  }

  end() {
    return generatorSteps.end.bind(this)()
  }

  initializing() {
    return generatorSteps.initializing.bind(this)()
  }

  install() {
    return generatorSteps.install.bind(this)()
  }

  prompting() {
    return generatorSteps.prompting.bind(this)()
  }

  writing() {
    return generatorSteps.writing.bind(this)()
  }
}
