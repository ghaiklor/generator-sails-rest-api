/**
 * Step 5
 * Where you write the generator specific files (routes, controllers, etc)
 */

const ENVIRONMENT_FILES = [
  'config/env/development.js',
  'config/env/production.js',
  'config/env/test.js'
];

const CONFIGURATION_FILES = [
  'config/blueprints.js',
  'config/bootstrap.js',
  'config/connections.js',
  'config/cors.js',
  'config/errors.js',
  'config/globals.js',
  'config/http.js',
  'config/models.js',
  'config/routes.js'
];

export default function () {
  ENVIRONMENT_FILES.forEach(file => this.copy(file, file));
  CONFIGURATION_FILES.forEach(file => this.copy(file, file));
};
