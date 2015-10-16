/**
 * Step 5
 * Where you write the generator specific files (routes, controllers, etc)
 */

const SOURCE_CONTROLLER = `Controller.js`;
const SOURCE_CONTROLLER_TEST = `Controller.test.js`;
const SOURCE_MODEL = `Model.js`;
const SOURCE_MODEL_TEST = `Model.test.js`;
const SOURCE_MODEL_FIXTURE = `ModelFixture.js`;

const DESTINATION_CONTROLLER = name => `api/controllers/${name}Controller.js`;
const DESTINATION_CONTROLLER_TEST = name => `test/unit/controllers/${name}Controller.test.js`;
const DESTINATION_MODEL = name => `api/models/${name}.js`;
const DESTINATION_MODEL_TEST = name => `test/unit/models/${name}.test.js`;
const DESTINATION_MODEL_FIXTURE = name => `test/fixtures/${name}Fixture.js`;

export default function () {
  let name = (this['model-name'].charAt(0).toUpperCase() + this['model-name'].slice(1)).replace(/Model/, '');
  let isREST = this.options['rest'];

  if (isREST) {
    this.template(SOURCE_CONTROLLER, DESTINATION_CONTROLLER(name), {name});
    this.template(SOURCE_CONTROLLER_TEST, DESTINATION_CONTROLLER_TEST(name), {name});
  }

  this.template(SOURCE_MODEL, DESTINATION_MODEL(name), {name});
  this.template(SOURCE_MODEL_TEST, DESTINATION_MODEL_TEST(name), {name});
  this.template(SOURCE_MODEL_FIXTURE, DESTINATION_MODEL_FIXTURE(name), {name});
};
