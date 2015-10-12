import { Base } from 'yeoman-generator';
import generatorArguments from './arguments';
import generatorOptions from './options';
import generatorSteps from './steps';

export default class AdapterGenerator extends Base {
  constructor(...args) {
    super(...args);

    Object.keys(generatorArguments).forEach(key => this.argument(key, generatorArguments[key]));
    Object.keys(generatorOptions).forEach(key => this.option(key, generatorOptions[key]));

    this.description = 'Scaffolds a custom adapter for Sails in api/adapters folder';
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
}
