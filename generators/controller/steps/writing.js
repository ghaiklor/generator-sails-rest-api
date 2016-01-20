/**
 * Step 5
 * Where you write the generator specific files (routes, controllers, etc)
 */

const fs = require('fs');

const SOURCE_CONTROLLER = name => name ? `api/controllers/${name}Controller.js` : `Controller.js`;
const SOURCE_CONTROLLER_TEST = name => name ? `test/unit/controllers/${name}Controller.test.js` : `Controller.test.js`;

const DESTINATION_CONTROLLER = name => `api/controllers/${name}Controller.js`;
const DESTINATION_CONTROLLER_TEST = name => `test/unit/controllers/${name}Controller.test.js`;

module.exports = function () {
  const name = (this['controller-name'].charAt(0).toUpperCase() + this['controller-name'].slice(1)).replace(/Controller/, '');
  const isNew = this.options['new'];
  const isAll = !name || this.options['all'];

  if (isAll) {
    this.directory(`api/controllers`, `api/controllers`);
    this.directory(`test/unit/controllers`, `test/unit/controllers`);
  } else if (isNew) {
    this.template(SOURCE_CONTROLLER(), DESTINATION_CONTROLLER(name), {name});
    this.template(SOURCE_CONTROLLER_TEST(), DESTINATION_CONTROLLER_TEST(name), {name});
  } else {
    const controllerTemplate = fs.existsSync(this.templatePath(SOURCE_CONTROLLER(name))) ? SOURCE_CONTROLLER(name) : SOURCE_CONTROLLER();
    const testTemplate = fs.existsSync(this.templatePath(SOURCE_CONTROLLER_TEST(name))) ? SOURCE_CONTROLLER_TEST(name) : SOURCE_CONTROLLER_TEST();

    this.template(controllerTemplate, DESTINATION_CONTROLLER(name), {name});
    this.template(testTemplate, DESTINATION_CONTROLLER_TEST(name), {name});
  }
};
