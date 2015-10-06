/**
 * Step 5
 * Where you write the generator specific files (routes, controllers, etc)
 */

export default function () {
  if (!this.options['use-default']) {
    this.directory('api/blueprints', 'api/blueprints');
    this.directory('test/unit/blueprints', 'test/unit/blueprints');
  }
};
