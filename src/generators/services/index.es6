import { Base } from 'yeoman-generator';
import generatorArguments from './arguments';
import generatorOptions from './options';
import generatorSteps from './steps';

export default class ServicesGenerator extends Base {
  constructor(...args) {
    super(...args);

    Object.keys(generatorArguments).forEach(name => this.argument(name, arguments[name]));
    Object.keys(generatorOptions).forEach(name => this.option(name, options[name]));

    //this._.templateSettings.interpolate = /<%=([\s\S]+?)%>/g;
  }

  get initializing() {
    return generatorSteps.initializing
  }

  get prompting() {
    return generatorSteps.prompting
  }

  get configuring() {
    return generatorSteps.configuring;
  }

  get writing() {
    return generatorSteps.writing;
  }

  get default() {
    return generatorSteps.default;
  }

  get conflicts() {
    return generatorSteps.conflicts;
  }

  get install() {
    return generatorSteps.install;
  }

  get end() {
    return generatorSteps.end;
  }
}
