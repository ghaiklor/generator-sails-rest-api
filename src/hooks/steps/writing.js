/**
 * Step 5
 * Where you write the generator specific files (routes, controllers, etc)
 */

const HOOK_FILES = {
  pluralizeModels: ['api/hooks/pluralize-models.js', 'test/unit/hooks/pluralize-models.test.js']
};

export default function () {
  Object.keys(HOOK_FILES).forEach(hook => HOOK_FILES[hook].forEach(file => this.copy(file, file)));
};
