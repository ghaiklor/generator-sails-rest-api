/**
 * Step 5
 * Where you write the generator specific files (routes, controllers, etc)
 */

import falafel from 'falafel'
import mkdirp from 'mkdirp'
import path from 'path'

import pathExists from 'yeoman-generator/node_modules/path-exists'
import detectConflict from 'yeoman-generator/node_modules/detect-conflict'

const collision = function (file, cb) {
  var rfilepath = path.relative(process.cwd(), file.path);
  if (!pathExists.sync(file.path)) {
    this.adapter.log.create(rfilepath);
    cb('create');
    return;
  }
  else if (/index.js$/.test(file.path)) {
    this.adapter.log.force(rfilepath);
    cb('force');
    return;
  }

  if (this.force) {
    this.adapter.log.force(rfilepath);
    cb('force');
    return;
  }
  if (detectConflict(file.path, file.contents)) {
    this.adapter.log.conflict(rfilepath);
    this._ask(file, cb);
  } else {
    this.adapter.log.identical(rfilepath);
    cb('identical');
  }
};

const SOURCE_CONTROLLER = 'Controller.js';
const SOURCE_CONTROLLER_TEST = 'Controller.test.js';

const DESTINATION_DIR = 'api/controllers'
const DESTINATION_INDEX = 'api/controllers/index.js'
const DESTINATION_CONTROLLER = name => `api/controllers/${name}Controller.js`;
const DESTINATION_TEST_DIR = 'test/integration/controllers'
const DESTINATION_CONTROLLER_TEST = name => `test/integration/controllers/${name}Controller.test.js`;

const controllerIndexRequire = name => `exports.${name}Controller = require('./${name}Controller')`

const isRequire = node => {
  return node.type === 'CallExpression' && 
    node.callee.type === 'Identifier' &&
    node.callee.name === 'require'
}

export default function () {
  let name = (this['controller-name'].charAt(0).toUpperCase() + this['controller-name'].slice(1)).replace(/Controller$/, '');
  let indexExists = false

  this.conflicter.collision = collision

  mkdirp.sync(DESTINATION_DIR)
  mkdirp.sync(DESTINATION_TEST_DIR)

  this.template(SOURCE_CONTROLLER, DESTINATION_CONTROLLER(name), {name});
  this.template(SOURCE_CONTROLLER_TEST, DESTINATION_CONTROLLER_TEST(name), {name});

  if (!this.fs.exists(this.destinationPath(DESTINATION_INDEX))) {
    return this.fs.write(this.destinationPath(DESTINATION_INDEX), controllerIndexRequire(name))
  }

  let oldIndex = falafel(this.fs.read(this.destinationPath(DESTINATION_INDEX)), node => {
    if (isRequire(node)) {
      if (node.arguments[0].value == `./${name}Controller`) {
        indexExists = true
      }
    }
  })

  this.log('old src', oldIndex.toString())

  if (indexExists) return

  let updatedIndex = falafel(this.fs.read(this.destinationPath(DESTINATION_INDEX)), node => {
    let src = node.source()
    if (node.type === 'Program' && !node.parent) {
      node.update(src + '\n' + controllerIndexRequire(name))
    }
  }).toString()

  this.log('new src', updatedIndex)

  this.fs.write(this.destinationPath(DESTINATION_INDEX), updatedIndex)
};
