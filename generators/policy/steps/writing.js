"use strict";

/**
 * Step 5
 * Where you write the generator specific files (routes, controllers, etc)
 */

const SOURCE_POLICY = 'Policy.js';
const SOURCE_POLICY_TEST = 'Policy.test.js';

const DESTINATION_POLICY = name => `api/policies/${name}.js`;
const DESTINATION_POLICY_TEST = name => `test/unit/policies/${name}.test.js`;

module.exports = function () {
  const name = (this.options['policy-name'].charAt(0).toLowerCase() + this.options['policy-name'].slice(1)).replace(/Policy/, '');

  this.fs.copyTpl(this.templatePath(SOURCE_POLICY), this.destinationPath(DESTINATION_POLICY(name)), {name});
  this.fs.copyTpl(this.templatePath(SOURCE_POLICY_TEST), this.destinationPath(DESTINATION_POLICY_TEST(name)), {name});
};
