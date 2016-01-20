"use strict";

const Base = require('yeoman-generator').Base;
const generatorArguments = require('./arguments');
const generatorOptions = require('./options');
const generatorSteps = require('./steps');

module.exports = class CronGenerator extends Base {
  constructor(args, options) {
    super(args, options);

    Object.keys(generatorArguments).forEach(key => this.argument(key, generatorArguments[key]));
    Object.keys(generatorOptions).forEach(key => this.option(key, generatorOptions[key]));

    this.description = 'Scaffolds a configuration for cron jobs';
  }

  get configuring() {
    return generatorSteps.configuring;
  }

  get conflicts() {
    return generatorSteps.conflicts;
  }

  get default() {
    return generatorSteps.default;
  }

  get end() {
    return generatorSteps.end;
  }

  get initializing() {
    return generatorSteps.initializing
  }

  get install() {
    return generatorSteps.install;
  }

  get prompting() {
    return generatorSteps.prompting
  }

  get writing() {
    return generatorSteps.writing;
  }
};
