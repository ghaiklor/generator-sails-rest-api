/**
 * Step 5
 * Where you write the generator specific files (routes, controllers, etc)
 */

import fs from 'fs';

const SOURCE_BLUEPRINT = name => name ? `api/blueprints/${name}.js` : `Blueprint.js`;
const SOURCE_BLUEPRINT_TEST = name => name ? `test/unit/blueprints/${name}.test.js` : `Blueprint.test.js`;

const DESTINATION_BLUEPRINT = name => `api/blueprints/${name}.js`;
const DESTINATION_BLUEPRINT_TEST = name => `test/unit/blueprints/${name}.test.js`;

export default function () {
  let name = this['blueprint-name'].replace(/Blueprint/, '').toLowerCase();
  let isNew = this.options['new'];
  let isAll = !name || this.options['all'];

  if (isAll) {
    this.directory(`api/blueprints`, `api/blueprints`);
    this.directory(`test/unit/blueprints`, `test/unit/blueprints`);
  } else if (isNew) {
    this.template(SOURCE_BLUEPRINT(), DESTINATION_BLUEPRINT(name), {name});
    this.template(SOURCE_BLUEPRINT_TEST(), DESTINATION_BLUEPRINT_TEST(name), {name});
  } else {
    let blueprintTemplate = fs.existsSync(this.templatePath(SOURCE_BLUEPRINT(name))) ? SOURCE_BLUEPRINT(name) : SOURCE_BLUEPRINT();
    let testTemplate = fs.existsSync(this.templatePath(SOURCE_BLUEPRINT_TEST(name))) ? SOURCE_BLUEPRINT_TEST(name) : SOURCE_BLUEPRINT_TEST();

    this.template(blueprintTemplate, DESTINATION_BLUEPRINT(name), {name});
    this.template(testTemplate, DESTINATION_BLUEPRINT_TEST(name), {name});
  }
};
