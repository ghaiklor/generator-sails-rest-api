/**
 * Step 5
 * Where you write the generator specific files (routes, controllers, etc)
 */

const CRON_FILES = [
  'config/cron.js'
];

export default function () {
  CRON_FILES.forEach(file => this.copy(file, file));
};
