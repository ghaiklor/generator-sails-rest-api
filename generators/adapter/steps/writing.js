"use strict";

/**
 * Step 5
 * Where you write the generator specific files (routes, controllers, etc)
 */

const SOURCE_ADAPTER = `Adapter.js`;
const SOURCE_ADAPTER_TEST = `Adapter.test.js`;

const DESTINATION_ADAPTER = name => `api/adapters/${name}Adapter.js`;
const DESTINATION_ADAPTER_TEST = name => `test/unit/adapters/${name}Adapter.test.js`;

module.exports = function () {
  const name = (this['adapter-name'].charAt(0).toUpperCase() + this['adapter-name'].slice(1)).replace(/Adapter/, '');

  this.template(SOURCE_ADAPTER, DESTINATION_ADAPTER(name), {name});
  this.template(SOURCE_ADAPTER_TEST, DESTINATION_ADAPTER_TEST(name), {name});
};
