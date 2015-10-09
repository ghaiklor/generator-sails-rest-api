/**
 * Step 5
 * Where you write the generator specific files (routes, controllers, etc)
 */

export default function () {
  this.copy('config/winstonLog.js', 'config/log.js');
};
