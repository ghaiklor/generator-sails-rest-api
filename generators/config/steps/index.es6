/**
 * Exports object that contains each of priority steps of yeoman run loop
 */

import configuringSteps from './configuring';
import conflictsSteps from './conflicts';
import defaultSteps from './default';
import endSteps from './end';
import initializingSteps from './initializing';
import installSteps from './install';
import promptingSteps from './prompting';
import writingSteps from './writing';

export default {
  configuring: configuringSteps,
  conflicts: conflictsSteps,
  default: defaultSteps,
  end: endSteps,
  initializing: initializingSteps,
  install: installSteps,
  prompting: promptingSteps,
  writing: writingSteps
}
