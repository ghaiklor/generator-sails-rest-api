/**
 * Step 5
 * Where you write the generator specific files (routes, controllers, etc)
 */

const DEFAULT_MODEL_TEMPLATE = 'api/models/Model.template';
const DEFAULT_FIXTURE_TEMPLATE = 'test/fixtures/Model.template';
const DEFAULT_TEST_TEMPLATE = 'test/unit/models/Model.template';

export default function () {
  let name = this['model-name'].charAt(0).toUpperCase() + this['model-name'].slice(1);

  this.template(DEFAULT_MODEL_TEMPLATE, `api/models/${name}.js`, {name});
  this.template(DEFAULT_FIXTURE_TEMPLATE, `test/fixtures/${name}.js`, {name});
  this.template(DEFAULT_TEST_TEMPLATE, `test/unit/models/${name}.test.js`, {name});
};
