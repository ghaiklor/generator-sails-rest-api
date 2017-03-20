"use strict";

/**
 * Step 5
 * Where you write the generator specific files (routes, controllers, etc)
 */

const fs = require('fs');

const SOURCE_RESPONSE = name => name ? `api/responses/${name}.js` : `Response.js`;
const SOURCE_RESPONSE_TEST = name => name ? `test/unit/responses/${name}.test.js` : `Response.test.js`;

const DESTINATION_RESPONSE = name => `api/responses/${name}.js`;
const DESTINATION_RESPONSE_TEST = name => `test/unit/responses/${name}.test.js`;

module.exports = function () {
  const name = (this.options['response-name'].charAt(0).toLowerCase() + this.options['response-name'].slice(1)).replace(/Response/, '');
  const isNew = this.options['new'];
  const isAll = !name || this.options['all'];

  if (isAll) {
    this.fs.copyTpl(this.templatePath(`api/responses/**/*`), this.destinationPath(`api/responses`));
    this.fs.copyTpl(this.templatePath(`test/unit/responses/**/*`), this.destinationPath(`test/unit/responses`));
  } else if (isNew) {
    this.fs.copyTpl(this.templatePath(SOURCE_RESPONSE()), this.destinationPath(DESTINATION_RESPONSE(name)), {name});
    this.fs.copyTpl(this.templatePath(SOURCE_RESPONSE_TEST()), this.destinationPath(DESTINATION_RESPONSE_TEST(name)), {name});
  } else {
    const responseTemplate = fs.existsSync(this.templatePath(SOURCE_RESPONSE(name))) ? SOURCE_RESPONSE(name) : SOURCE_RESPONSE();
    const testTemplate = fs.existsSync(this.templatePath(SOURCE_RESPONSE_TEST(name))) ? SOURCE_RESPONSE_TEST(name) : SOURCE_RESPONSE_TEST();

    this.fs.copyTpl(this.templatePath(responseTemplate), this.destinationPath(DESTINATION_RESPONSE(name)), {name});
    this.fs.copyTpl(this.templatePath(testTemplate), this.destinationPath(DESTINATION_RESPONSE_TEST(name)), {name});
  }
};
