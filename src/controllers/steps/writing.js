/**
 * Step 5
 * Where you write the generator specific files (routes, controllers, etc)
 */

export default function () {
  this.directory('api/controllers', 'api/controllers');
  this.directory('test/unit/controllers', 'test/unit/controllers');
};
