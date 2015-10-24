/**
 * Step 5
 * Where you write the generator specific files (routes, controllers, etc)
 */

import fs from 'fs';

const SOURCE_RESPONSE = name => name ? `api/responses/${name}.js` : `Response.js`;
const SOURCE_RESPONSE_TEST = name => name ? `test/unit/responses/${name}.test.js` : `Response.test.js`;

const DESTINATION_RESPONSE = name => `api/responses/${name}.js`;
const DESTINATION_RESPONSE_TEST = name => `test/unit/responses/${name}.test.js`;

export default function () {
  let name = (this['response-name'].charAt(0).toLowerCase() + this['response-name'].slice(1)).replace(/Response/, '');
  let isNew = this.options['new'];
  let isAll = !name || this.options['all'];

  if (isAll) {
    this.directory(`api/responses`, `api/responses`);
    this.directory(`test/unit/responses`, `test/unit/responses`);
  } else if (isNew) {
    this.template(SOURCE_RESPONSE(), DESTINATION_RESPONSE(name), {name});
    this.template(SOURCE_RESPONSE_TEST(), DESTINATION_RESPONSE_TEST(name), {name});
  } else {
    let responseTemplate = fs.existsSync(this.templatePath(SOURCE_RESPONSE(name))) ? SOURCE_RESPONSE(name) : SOURCE_RESPONSE();
    let testTemplate = fs.existsSync(this.templatePath(SOURCE_RESPONSE_TEST(name))) ? SOURCE_RESPONSE_TEST(name) : SOURCE_RESPONSE_TEST();

    this.template(responseTemplate, DESTINATION_RESPONSE(name), {name});
    this.template(testTemplate, DESTINATION_RESPONSE_TEST(name), {name});
  }
};
