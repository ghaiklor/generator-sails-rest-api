/**
 * Step 5
 * Where you write the generator specific files (routes, controllers, etc)
 */

const DEFAULT_POLICY_TEMPLATE = 'api/policies/Policy.template';
const DEFAULT_TEST_TEMPLATE = 'test/unit/policies/Policy.template';

export default function () {
  let name = this['policy-name'].charAt(0).toLowerCase() + this['policy-name'].slice(1);

  this.template(DEFAULT_POLICY_TEMPLATE, `api/policies/${name}.js`, {name});
  this.template(DEFAULT_TEST_TEMPLATE, `test/unit/policies/${name}.test.js`, {name});
};
