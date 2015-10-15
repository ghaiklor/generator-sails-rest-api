/**
 * Step 5
 * Where you write the generator specific files (routes, controllers, etc)
 */

import fs from 'fs';

const RESPONSE_TEMPLATE = (name = 'Response') => `api/responses/${name}.js`;
const RESPONSE_TEST_TEMPLATE = (name = 'Response') => `test/unit/responses/${name}.test.js`;

export default function () {
  let name = (this['response-name'].charAt(0).toLowerCase() + this['response-name'].slice(1)).replace(/Response/, '');

  let responseTemplate = fs.existsSync(this.templatePath(RESPONSE_TEMPLATE(name))) ? RESPONSE_TEMPLATE(name) : RESPONSE_TEMPLATE();
  let testTemplate = fs.existsSync(this.templatePath(RESPONSE_TEST_TEMPLATE(name))) ? RESPONSE_TEST_TEMPLATE(name) : RESPONSE_TEST_TEMPLATE();

  this.template(responseTemplate, `api/responses/${name}.js`, {name});
  this.template(testTemplate, `test/unit/responses/${name}.test.js`, {name});
};
