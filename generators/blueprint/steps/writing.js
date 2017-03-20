"use strict";

/**
 * Step 5
 * Where you write the generator specific files (routes, controllers, etc)
 */

const fs = require('fs');

const SOURCE_BLUEPRINT = name => name ? `api/blueprints/${name}.js` : `Blueprint.js`;
const SOURCE_BLUEPRINT_TEST = name => name ? `test/unit/blueprints/${name}.test.js` : `Blueprint.test.js`;

const DESTINATION_BLUEPRINT = name => `api/blueprints/${name}.js`;
const DESTINATION_BLUEPRINT_TEST = name => `test/unit/blueprints/${name}.test.js`;

module.exports = function () {
  const name = this.options['blueprint-name'].replace(/Blueprint/, '').toLowerCase();
  const isNew = this.options['new'];
  const isAll = !name || this.options['all'];

  if (isAll) {
    this.fs.copyTpl(this.templatePath(`api/blueprints/**/*`), this.destinationPath(`api/blueprints`));
    this.fs.copyTpl(this.templatePath(`test/unit/blueprints/**/*`), this.destinationPath(`test/unit/blueprints`));
  } else if (isNew) {
    this.fs.copyTpl(this.templatePath(SOURCE_BLUEPRINT()), this.destinationPath(DESTINATION_BLUEPRINT(name)), {name});
    this.fs.copyTpl(this.templatePath(SOURCE_BLUEPRINT_TEST()), this.destinationPath(DESTINATION_BLUEPRINT_TEST(name)), {name});
  } else {
    const blueprintTemplate = fs.existsSync(this.templatePath(SOURCE_BLUEPRINT(name))) ? SOURCE_BLUEPRINT(name) : SOURCE_BLUEPRINT();
    const testTemplate = fs.existsSync(this.templatePath(SOURCE_BLUEPRINT_TEST(name))) ? SOURCE_BLUEPRINT_TEST(name) : SOURCE_BLUEPRINT_TEST();

    this.fs.copyTpl(this.templatePath(blueprintTemplate), this.destinationPath(DESTINATION_BLUEPRINT(name)), {name});
    this.fs.copyTpl(this.templatePath(testTemplate), this.destinationPath(DESTINATION_BLUEPRINT_TEST(name)), {name});
  }
};
