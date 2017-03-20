"use strict";

/**
 * Step 5
 * Where you write the generator specific files (routes, controllers, etc)
 */

const fs = require('fs');

const SOURCE_SERVICE = name => name ? `api/services/${name}Service.js` : `Service.js`;
const SOURCE_SERVICE_CONFIG = name => name ? `config/services/${name.toLowerCase()}.js` : `ServiceConfig.js`;
const SOURCE_SERVICE_TEST = name => name ? `test/unit/services/${name}Service.test.js` : `Service.test.js`;

const DESTINATION_SERVICE = name => `api/services/${name}Service.js`;
const DESTINATION_SERVICE_CONFIG = name => `config/services/${name.toLowerCase()}.js`;
const DESTINATION_SERVICE_TEST = name => `test/unit/services/${name}Service.test.js`;

module.exports = function () {
  const name = (this.options['service-name'].charAt(0).toUpperCase() + this.options['service-name'].slice(1)).replace(/Service/, '');
  const isNew = this.options['new'];
  const isAll = !name || this.options['all'];

  if (isAll) {
    this.fs.copyTpl(this.templatePath(`api/services/**/*`), this.destinationPath(`api/services`), {options: this.options});
    this.fs.copyTpl(this.templatePath(`config/services/**/*`), this.destinationPath(`config/services`), {options: this.options});
    this.fs.copyTpl(this.templatePath(`test/unit/services/**/*`), this.destinationPath(`test/unit/services`), {options: this.options});
  } else if (isNew) {
    this.fs.copyTpl(this.templatePath(SOURCE_SERVICE()), this.destinationPath(DESTINATION_SERVICE(name)), {name, options: this.options});
    this.fs.copyTpl(this.templatePath(SOURCE_SERVICE_CONFIG()), this.destinationPath(DESTINATION_SERVICE_CONFIG(name)), {name, options: this.options});
    this.fs.copyTpl(this.templatePath(SOURCE_SERVICE_TEST()), this.destinationPath(DESTINATION_SERVICE_TEST(name)), {name, options: this.options});
  } else {
    const serviceTemplate = fs.existsSync(this.templatePath(SOURCE_SERVICE(name))) ? SOURCE_SERVICE(name) : SOURCE_SERVICE();
    const configTemplate = fs.existsSync(this.templatePath(SOURCE_SERVICE_CONFIG(name))) ? SOURCE_SERVICE_CONFIG(name) : SOURCE_SERVICE_CONFIG();
    const testTemplate = fs.existsSync(this.templatePath(SOURCE_SERVICE_TEST(name))) ? SOURCE_SERVICE_TEST(name) : SOURCE_SERVICE_TEST();

    this.fs.copyTpl(this.templatePath(serviceTemplate), this.destinationPath(DESTINATION_SERVICE(name)), {name, options: this.options});
    this.fs.copyTpl(this.templatePath(configTemplate), this.destinationPath(DESTINATION_SERVICE_CONFIG(name)), {name, options: this.options});
    this.fs.copyTpl(this.templatePath(testTemplate), this.destinationPath(DESTINATION_SERVICE_TEST(name)), {name, options: this.options});
  }
};
