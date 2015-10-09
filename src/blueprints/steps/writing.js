/**
 * Step 5
 * Where you write the generator specific files (routes, controllers, etc)
 */

import fs from 'fs';
import path from 'path';

const GIT_KEEP_FILES = [
  'api/blueprints/.gitkeep',
  'test/unit/blueprints/.gitkeep'
];

const BLUEPRINTS_FILES = {
  add: ['api/blueprints/add.js', 'test/unit/blueprints/add.test.js'],
  create: ['api/blueprints/create.js', 'test/unit/blueprints/create.test.js'],
  destroy: ['api/blueprints/destroy.js', 'test/unit/blueprints/destroy.test.js'],
  find: ['api/blueprints/find.js', 'test/unit/blueprints/find.test.js'],
  findOne: ['api/blueprints/findone.js', 'test/unit/blueprints/findone.test.js'],
  populate: ['api/blueprints/populate.js', 'test/unit/blueprints/populate.test.js'],
  remove: ['api/blueprints/remove.js', 'test/unit/blueprints/remove.test.js'],
  update: ['api/blueprints/update.js', 'test/unit/blueprints/update.test.js']
};

const removeFile = file => fs.existsSync(file) ? fs.unlinkSync(path.resolve(process.cwd(), file)) : false;

export default function () {
  if (this.options['use-default']) {
    GIT_KEEP_FILES.forEach(file => this.copy(file, file));
    Object.keys(BLUEPRINTS_FILES).forEach(blueprint => BLUEPRINTS_FILES[blueprint].forEach(removeFile));
  } else {
    GIT_KEEP_FILES.forEach(removeFile);
    Object.keys(BLUEPRINTS_FILES).forEach(blueprint => BLUEPRINTS_FILES[blueprint].forEach(file => this.copy(file, file)));
  }
};
