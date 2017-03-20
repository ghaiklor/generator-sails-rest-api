"use strict";

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
  const name = (this.options['controller-name'].charAt(0).toUpperCase() + this.options['controller-name'].slice(1)).replace(/Controller/, '');
  const isNew = this.options['new'];
  const isAll = !name || this.options['all'];

  if (isAll) {
    this.fs.copyTpl(this.templatePath(`api/controllers/**/*`), this.destinationPath(`api/controllers`));
    this.fs.copyTpl(this.templatePath(`test/unit/controllers/**/*`), this.destinationPath(`test/unit/controllers`));
  } else if (isNew) {
    this.fs.copyTpl(this.templatePath(SOURCE_CONTROLLER()), this.destinationPath(DESTINATION_CONTROLLER(name)), {name});
    this.fs.copyTpl(this.templatePath(SOURCE_CONTROLLER_TEST()), this.destinationPath(DESTINATION_CONTROLLER_TEST(name)), {name});
  } else {
    const controllerTemplate = fs.existsSync(this.templatePath(SOURCE_CONTROLLER(name))) ? SOURCE_CONTROLLER(name) : SOURCE_CONTROLLER();
    const testTemplate = fs.existsSync(this.templatePath(SOURCE_CONTROLLER_TEST(name))) ? SOURCE_CONTROLLER_TEST(name) : SOURCE_CONTROLLER_TEST();

    this.fs.copyTpl(this.templatePath(controllerTemplate), this.destinationPath(DESTINATION_CONTROLLER(name)), {name});
    this.fs.copyTpl(this.templatePath(testTemplate), this.destinationPath(DESTINATION_CONTROLLER_TEST(name)), {name});
  }
};
