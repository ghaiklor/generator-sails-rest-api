/**
 * Step 5
 * Where you write the generator specific files (routes, controllers, etc)
 */

import fs from 'fs';

const SOURCE_SERVICE = name => name ? `api/services/${name}Service.js` : `Service.js`;
const SOURCE_SERVICE_CONFIG = name => name ? `config/services/${name.toLowerCase()}.js` : `ServiceConfig.js`;
const SOURCE_SERVICE_TEST = name => name ? `test/unit/services/${name}Service.test.js` : `Service.test.js`;

const DESTINATION_SERVICE = name => `api/services/${name}Service.js`;
const DESTINATION_SERVICE_CONFIG = name => `config/services/${name.toLowerCase()}.js`;
const DESTINATION_SERVICE_TEST = name => `test/unit/services/${name}Service.test.js`;

export default function () {
  let name = (this['service-name'].charAt(0).toUpperCase() + this['service-name'].slice(1)).replace(/Service/, '');

  let serviceTemplate = fs.existsSync(this.templatePath(SOURCE_SERVICE(name))) ? SOURCE_SERVICE(name) : SOURCE_SERVICE();
  let configTemplate = fs.existsSync(this.templatePath(SOURCE_SERVICE_CONFIG(name))) ? SOURCE_SERVICE_CONFIG(name) : SOURCE_SERVICE_CONFIG();
  let testTemplate = fs.existsSync(this.templatePath(SOURCE_SERVICE_TEST(name))) ? SOURCE_SERVICE_TEST(name) : SOURCE_SERVICE_TEST();

  this.template(serviceTemplate, DESTINATION_SERVICE(name), {name, options: this.options});
  this.template(configTemplate, DESTINATION_SERVICE_CONFIG(name), {name, options: this.options});
  this.template(testTemplate, DESTINATION_SERVICE_TEST(name), {name, options: this.options});
};
