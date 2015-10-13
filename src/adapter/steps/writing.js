/**
 * Step 5
 * Where you write the generator specific files (routes, controllers, etc)
 */

const GENERIC_ADAPTER_TEMPLATE = 'api/adapters/Adapter.js';
const GENERIC_ADAPTER_TEST_TEMPLATE = 'test/unit/adapters/Adapter.js';

export default function () {
  let name = (this['adapter-name'].charAt(0).toUpperCase() + this['adapter-name'].slice(1)).replace(/Adapter/, '');

  this.template(GENERIC_ADAPTER_TEMPLATE, `api/adapters/${name}Adapter.js`, {name});
  this.template(GENERIC_ADAPTER_TEST_TEMPLATE, `test/unit/adapters/${name}Adapter.test.js`, {name});
};
