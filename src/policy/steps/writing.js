/**
 * Step 5
 * Where you write the generator specific files (routes, controllers, etc)
 */

const SOURCE_POLICY = 'Policy.js';
const SOURCE_POLICY_TEST = 'Policy.test.js';

const DESTINATION_POLICY = name => `api/policies/${name}.js`;
const DESTINATION_POLICY_TEST = name => `test/unit/policies/${name}.test.js`;

export default function () {
  let name = (this['policy-name'].charAt(0).toLowerCase() + this['policy-name'].slice(1)).replace(/Policy/, '');

  this.template(SOURCE_POLICY, DESTINATION_POLICY(name), {name});
  this.template(SOURCE_POLICY_TEST, DESTINATION_POLICY_TEST(name), {name});
};
