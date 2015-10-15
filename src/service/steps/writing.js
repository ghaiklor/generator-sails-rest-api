/**
 * Step 5
 * Where you write the generator specific files (routes, controllers, etc)
 */

import fs from 'fs';

const SERVICE_TEMPLATE = (name = '') => `api/services/${name}Service.js`;
const SERVICE_CONFIG_TEMPLATE = (name = 'Service') => `config/services/${name}.js`;
const SERVICE_TEST_TEMPLATE = (name = '') => `test/unit/services/${name}Service.test.js`;

export default function () {
  let name = (this['service-name'].charAt(0).toUpperCase() + this['service-name'].slice(1)).replace(/Service/, '');

  let serviceTemplate = fs.existsSync(this.templatePath(SERVICE_TEMPLATE(name))) ? SERVICE_TEMPLATE(name) : SERVICE_TEMPLATE();
  let configTemplate = fs.existsSync(this.templatePath(SERVICE_CONFIG_TEMPLATE(name))) ? SERVICE_CONFIG_TEMPLATE(name) : SERVICE_CONFIG_TEMPLATE();
  let testTemplate = fs.existsSync(this.templatePath(SERVICE_TEST_TEMPLATE(name))) ? SERVICE_TEST_TEMPLATE(name) : SERVICE_TEST_TEMPLATE();

  this.template(serviceTemplate, `api/services/${name}Service.js`, {name, options: this.options});
  this.template(configTemplate, `config/services/${name.toLowerCase()}.js`, {name, options: this.options});
  this.template(testTemplate, `test/unit/services/${name}Service.test.js`, {name, options: this.options});
};
