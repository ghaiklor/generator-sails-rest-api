"use strict";

/**
 * Step 5
 * Where you write the generator specific files (routes, controllers, etc)
 */

const fs = require('fs');

const SOURCE_HOOK = name => name ? `api/hooks/${name}Hook.js` : `Hook.js`;
const SOURCE_HOOK_TEST = name => name ? `test/unit/hooks/${name}Hook.test.js` : `Hook.test.js`;

const DESTINATION_HOOK = name => `api/hooks/${name}Hook.js`;
const DESTINATION_HOOK_TEST = name => `test/unit/hooks/${name}Hook.test.js`;

module.exports = function () {
  const name = (this.options['hook-name'].charAt(0).toUpperCase() + this.options['hook-name'].slice(1)).replace(/Hook/, '');
  const isNew = this.options['new'];
  const isAll = !name || this.options['all'];

  if (isAll) {
    this.fs.copyTpl(this.templatePath(`api/hooks/**/*`), this.destinationPath(`api/hooks`));
    this.fs.copyTpl(this.templatePath(`test/unit/hooks/**/*`), this.destinationPath(`test/unit/hooks`));
  } else if (isNew) {
    this.fs.copyTpl(this.templatePath(SOURCE_HOOK()), this.destinationPath(DESTINATION_HOOK(name)), {name});
    this.fs.copyTpl(this.templatePath(SOURCE_HOOK_TEST()), this.destinationPath(DESTINATION_HOOK_TEST(name)), {name});
  } else {
    const hookTemplate = fs.existsSync(this.templatePath(SOURCE_HOOK(name))) ? SOURCE_HOOK(name) : SOURCE_HOOK();
    const testTemplate = fs.existsSync(this.templatePath(SOURCE_HOOK_TEST(name))) ? SOURCE_HOOK_TEST(name) : SOURCE_HOOK_TEST();

    this.fs.copyTpl(this.templatePath(hookTemplate), this.destinationPath(DESTINATION_HOOK(name)), {name});
    this.fs.copyTpl(this.templatePath(testTemplate), this.destinationPath(DESTINATION_HOOK_TEST(name)), {name});
  }
};
