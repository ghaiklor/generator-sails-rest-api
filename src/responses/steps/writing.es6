/**
 * Step 5
 * Where you write the generator specific files (routes, controllers, etc)
 */

export default function () {
  this.directory('api/responses', 'api/responses');
  this.directory('test/unit/responses', 'test/unit/responses');
};
