/**
 * Step 5
 * Where you write the generator specific files (routes, controllers, etc)
 */

import falafel from 'falafel'
import mkdirp from 'mkdirp'
import path from 'path'
import Util from '../../app/util'

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
  Util.patchConflicter()

  let name = (this['controller-name'].charAt(0).toUpperCase() + this['controller-name'].slice(1)).replace(/Controller$/, '');
  let fileName = `${name}Controller`
  let indexPath = this.destinationPath(DESTINATION_INDEX)

  mkdirp.sync(DESTINATION_DIR)
  mkdirp.sync(DESTINATION_TEST_DIR)

  this.template(SOURCE_CONTROLLER, DESTINATION_CONTROLLER(name), {name});
  this.template(SOURCE_CONTROLLER_TEST, DESTINATION_CONTROLLER_TEST(name), {name});

  if (!this.fs.exists(this.destinationPath(DESTINATION_INDEX))) {
    return this.fs.write(this.destinationPath(DESTINATION_INDEX), controllerIndexRequire(name))
  }

  if (Util.hasRequireStatement(fileName, this.fs.read(indexPath))) {
    this.log.identical(DESTINATION_INDEX);
    return
  }

  let indexContents = this.fs.read(indexPath)
  let updatedIndexFile = Util.getUpdatedIndexFile(fileName, indexContents)

  this.fs.write(indexPath, updatedIndexFile)
};
