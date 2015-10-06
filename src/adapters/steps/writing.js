/**
 * Step 5
 * Where you write the generator specific files (routes, controllers, etc)
 */

export default function () {
  this.copy('api/adapters/.gitkeep', 'api/adapters/.gitkeep');
  this.copy('test/unit/adapters/.gitkeep', 'test/unit/adapters/.gitkeep');
};
