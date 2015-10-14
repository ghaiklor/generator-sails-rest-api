/**
 * Step 5
 * Where you write the generator specific files (routes, controllers, etc)
 */

const GENERIC_POLICY_TEMPLATE = 'api/policies/Policy.js';
const GENERIC_POLICY_TEST_TEMPLATE = 'test/unit/policies/Policy.test.js';

export default function () {
  let name = (this['policy-name'].charAt(0).toLowerCase() + this['policy-name'].slice(1)).replace(/Policy/, '');

  this.template(GENERIC_POLICY_TEMPLATE, `api/policies/${name}.js`, {name});
  this.template(GENERIC_POLICY_TEST_TEMPLATE, `test/unit/policies/${name}.test.js`, {name});
};
