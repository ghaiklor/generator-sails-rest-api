/**
 * Step 5
 * Where you write the generator specific files (routes, controllers, etc)
 */

export default function () {
  this.directory('api/hooks', 'api/hooks');
  this.directory('test/unit/hooks', 'test/unit/hooks');
};
