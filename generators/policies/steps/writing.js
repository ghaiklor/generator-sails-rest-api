/**
 * Step 5
 * Where you write the generator specific files (routes, controllers, etc)
 */

export default function () {
  this.directory('api/policies', 'api/policies');
  this.directory('test/unit/policies', 'test/unit/policies');
};
