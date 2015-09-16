/**
 * Exports object contains each priority step for yeoman run loop
 */

import configuring from './configuring';
import conflicts from './conflicts';
import end from './end';
import initializing from './initializing';
import install from './install';
import prompting from './prompting';
import writing from './writing';

export default {
  configuring,
  conflicts,
  end,
  initializing,
  install,
  prompting,
  writing
}
