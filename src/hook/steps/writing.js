/**
 * Step 5
 * Where you write the generator specific files (routes, controllers, etc)
 */

import fs from 'fs';

const HOOK_TEMPLATE = (name = '') => `api/hooks/${name}Hook.js`;
const HOOK_TEST_TEMPLATE = (name = '') => `test/unit/hooks/${name}Hook.test.js`;

export default function () {
  let name = (this['hook-name'].charAt(0).toUpperCase() + this['hook-name'].slice(1)).replace(/Hook/, '');

  let hookTemplate = fs.existsSync(this.templatePath(HOOK_TEMPLATE(name))) ? HOOK_TEMPLATE(name) : HOOK_TEMPLATE();
  let testTemplate = fs.existsSync(this.templatePath(HOOK_TEST_TEMPLATE(name))) ? HOOK_TEST_TEMPLATE(name) : HOOK_TEST_TEMPLATE();

  this.template(hookTemplate, `api/hooks/${name}Hook.js`, {name});
  this.template(testTemplate, `test/unit/hooks/${name}Hook.test.js`, {name});
};
