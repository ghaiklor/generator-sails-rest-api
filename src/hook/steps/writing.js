/**
 * Step 5
 * Where you write the generator specific files (routes, controllers, etc)
 */

import fs from 'fs';

const DEFAULT_HOOK_TEMPLATE = 'api/hooks/Hook.template';
const DEFAULT_TEST_TEMPLATE = 'test/unit/hooks/Hook.template';

export default function () {
  let name = this['hook-name'].toLowerCase();

  let hookTemplate = fs.existsSync(this.templatePath(`api/hooks/${name}.js`)) ? `api/hooks/${name}.js` : DEFAULT_HOOK_TEMPLATE;
  let testTemplate = fs.existsSync(this.templatePath(`test/unit/hooks/${name}.test.js`)) ? `test/unit/hooks/${name}.test.js` : DEFAULT_TEST_TEMPLATE;

  this.template(hookTemplate, `api/hooks/${name}.js`, {name});
  this.template(testTemplate, `test/unit/hooks/${name}.test.js`, {name});
};
