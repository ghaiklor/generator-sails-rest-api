/**
 * Step 5
 * Where you write the generator specific files (routes, controllers, etc)
 */

import fs from 'fs';

const SOURCE_CONTROLLER = 'Controller.js';
const SOURCE_CONTROLLER_TEST = 'Controller.test.js';

const DESTINATION_CONTROLLER = name => `api/controllers/${name}Controller.js`;
const DESTINATION_CONTROLLER_TEST = name => `test/integration/controllers/${name}Controller.test.js`;

export default function () {
  let name = (this['controller-name'].charAt(0).toUpperCase() + this['controller-name'].slice(1)).replace(/Controller$/, '');
  let isNew = this.options['new'];
  let isAll = !name || this.options['all'];

  if (isAll) {
    this.directory(`api/controllers`, `api/controllers`);
    this.directory(`test/integration/controllers`, `test/integration/controllers`);
  } else if (isNew) {
    this.template(SOURCE_CONTROLLER, DESTINATION_CONTROLLER(name), {name});
    this.template(SOURCE_CONTROLLER_TEST(), DESTINATION_CONTROLLER_TEST(name), {name});
  } else {
    let controllerTemplate = SOURCE_CONTROLLER;
    let testTemplate = SOURCE_CONTROLLER_TEST;

    this.template(controllerTemplate, DESTINATION_CONTROLLER(name), {name});
    this.template(testTemplate, DESTINATION_CONTROLLER_TEST(name), {name});
  }
};
