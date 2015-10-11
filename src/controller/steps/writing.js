/**
 * Step 5
 * Where you write the generator specific files (routes, controllers, etc)
 */

import fs from 'fs';

export default function () {
  let name = (this['controller-name'].charAt(0).toUpperCase() + this['controller-name'].slice(1)).replace(/Controller/, '');
  let actions = this['controller-actions'].split(',');

  let controllerTemplate = fs.existsSync(this.templatePath(`api/controllers/${name}Controller.template`)) ? `api/controllers/${name}Controller.template` : `api/controllers/Controller.template`;
  let testTemplate = fs.existsSync(this.templatePath(`test/unit/controllers/${name}Controller.template`)) ? `test/unit/controllers/${name}Controller.template` : `test/unit/controllers/Controller.template`;

  this.template(controllerTemplate, `api/controllers/${name}Controller.js`, {name, actions});
  this.template(testTemplate, `test/unit/controllers/${name}Controller.test.js`, {name, actions});
};
