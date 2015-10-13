/**
 * Step 5
 * Where you write the generator specific files (routes, controllers, etc)
 */

import fs from 'fs';

const CONTROLLER_TEMPLATE = (name = '') => `api/controllers/${name}Controller.template`;
const CONTROLLER_TEST_TEMPLATE = (name = '') => `test/unit/controllers/${name}Controller.js`;

export default function () {
  let name = (this['controller-name'].charAt(0).toUpperCase() + this['controller-name'].slice(1)).replace(/Controller/, '');
  let actions = this['controller-actions'];

  let controllerTemplate = fs.existsSync(this.templatePath(CONTROLLER_TEMPLATE(name))) ? CONTROLLER_TEMPLATE(name) : CONTROLLER_TEMPLATE();
  let testTemplate = fs.existsSync(this.templatePath(CONTROLLER_TEST_TEMPLATE(name))) ? CONTROLLER_TEST_TEMPLATE(name) : CONTROLLER_TEST_TEMPLATE();

  this.template(controllerTemplate, `api/controllers/${name}Controller.js`, {name, actions});
  this.template(testTemplate, `test/unit/controllers/${name}Controller.test.js`, {name, actions});
};
