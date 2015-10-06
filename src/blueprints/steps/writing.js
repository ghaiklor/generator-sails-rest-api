/**
 * Step 5
 * Where you write the generator specific files (routes, controllers, etc)
 */

const FILES_MAP = {
  add: ['api/blueprints/add.js', 'test/unit/blueprints/add.test.js'],
  create: ['api/blueprints/create.js', 'test/unit/blueprints/create.test.js'],
  destroy: ['api/blueprints/destroy.js', 'test/unit/blueprints/destroy.test.js'],
  find: ['api/blueprints/find.js', 'test/unit/blueprints/find.test.js'],
  findOne: ['api/blueprints/findone.js', 'test/unit/blueprints/findone.test.js'],
  populate: ['api/blueprints/populate.js', 'test/unit/blueprints/populate.test.js'],
  remove: ['api/blueprints/remove.js', 'test/unit/blueprints/remove.test.js'],
  update: ['api/blueprints/update.js', 'test/unit/blueprints/update.test.js']
};

export default function () {
  this.copy('api/blueprints/.gitkeep', 'api/blueprints/.gitkeep');
  this.copy('test/unit/blueprints/.gitkeep', 'test/unit/blueprints/.gitkeep');

  if (!this.options['use-default']) {
    Object.keys(FILES_MAP).forEach(blueprint => FILES_MAP[blueprint].forEach(path => this.copy(path, path)));
  }
};
