/**
 * Step 5
 * Where you write the generator specific files (routes, controllers, etc)
 */

import fs from 'fs';

const SOURCE_HOOK = name => name ? `api/hooks/${name}Hook.js` : `Hook.js`;
const SOURCE_HOOK_TEST = name => name ? `test/unit/hooks/${name}Hook.test.js` : `Hook.test.js`;

const DESTINATION_HOOK = name => `api/hooks/${name}Hook.js`;
const DESTINATION_HOOK_TEST = name => `test/unit/hooks/${name}Hook.test.js`;

export default function () {
  let name = (this['hook-name'].charAt(0).toUpperCase() + this['hook-name'].slice(1)).replace(/Hook/, '');
  let isNew = this.options['new'];
  let isAll = !name || this.options['all'];

  if (isAll) {
    this.directory(`api/hooks`, `api/hooks`);
    this.directory(`test/unit/hooks`, `test/unit/hooks`);
  } else if (isNew) {
    this.template(SOURCE_HOOK(), DESTINATION_HOOK(name), {name});
    this.template(SOURCE_HOOK_TEST(), DESTINATION_HOOK_TEST(name), {name});
  } else {
    let hookTemplate = fs.existsSync(this.templatePath(SOURCE_HOOK(name))) ? SOURCE_HOOK(name) : SOURCE_HOOK();
    let testTemplate = fs.existsSync(this.templatePath(SOURCE_HOOK_TEST(name))) ? SOURCE_HOOK_TEST(name) : SOURCE_HOOK_TEST();

    this.template(hookTemplate, DESTINATION_HOOK(name), {name});
    this.template(testTemplate, DESTINATION_HOOK_TEST(name), {name});
  }
};
