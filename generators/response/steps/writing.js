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
  const name = (this['response-name'].charAt(0).toLowerCase() + this['response-name'].slice(1)).replace(/Response/, '');
  const isNew = this.options['new'];
  const isAll = !name || this.options['all'];

  if (isAll) {
    this.directory(`api/responses`, `api/responses`);
    this.directory(`test/unit/responses`, `test/unit/responses`);
  } else if (isNew) {
    this.template(SOURCE_RESPONSE(), DESTINATION_RESPONSE(name), {name});
    this.template(SOURCE_RESPONSE_TEST(), DESTINATION_RESPONSE_TEST(name), {name});
  } else {
    const responseTemplate = fs.existsSync(this.templatePath(SOURCE_RESPONSE(name))) ? SOURCE_RESPONSE(name) : SOURCE_RESPONSE();
    const testTemplate = fs.existsSync(this.templatePath(SOURCE_RESPONSE_TEST(name))) ? SOURCE_RESPONSE_TEST(name) : SOURCE_RESPONSE_TEST();

    this.template(responseTemplate, DESTINATION_RESPONSE(name), {name});
    this.template(testTemplate, DESTINATION_RESPONSE_TEST(name), {name});
  }
};
