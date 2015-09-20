/**
 * Step 5
 * Where you write the generator specific files (routes, controllers, etc)
 */

export default function () {
  this.directory('api/adapters', 'api/adapters');
  this.directory('test/unit/adapters', 'test/unit/adapters');
};
