/**
 * Step 5
 * Where you write the generator specific files (routes, controllers, etc)
 */

const GENERIC_CONTROLLER_TEMPLATE = 'api/controllers/Controller.js';
const GENERIC_CONTROLLER_TEST_TEMPLATE = 'test/unit/controllers/Controller.test.js';

const GENERIC_MODEL_TEMPLATE = 'api/models/Model.js';
const GENERIC_MODEL_FIXTURE_TEMPLATE = 'test/fixtures/Model.js';
const GENERIC_MODEL_TEST_TEMPLATE = 'test/unit/models/Model.test.js';

export default function () {
  let name = (this['model-name'].charAt(0).toUpperCase() + this['model-name'].slice(1)).replace(/Model/, '');
  let isREST = this.options['rest'];

  if (isREST) {
    this.template(GENERIC_CONTROLLER_TEMPLATE, `api/controllers/${name}Controller.js`, {name});
    this.template(GENERIC_CONTROLLER_TEST_TEMPLATE, `test/unit/controllers/${name}Controller.test.js`, {name});
  }

  this.template(GENERIC_MODEL_TEMPLATE, `api/models/${name}.js`, {name});
  this.template(GENERIC_MODEL_FIXTURE_TEMPLATE, `test/fixtures/${name}.js`, {name});
  this.template(GENERIC_MODEL_TEST_TEMPLATE, `test/unit/models/${name}.test.js`, {name});
};
