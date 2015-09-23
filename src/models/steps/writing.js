/**
 * Step 5
 * Where you write the generator specific files (routes, controllers, etc)
 */

export default function () {
  this.directory('api/models', 'api/models');
  this.directory('test/fixtures', 'test/fixtures');
  this.directory('test/unit/models', 'test/unit/models');
};
