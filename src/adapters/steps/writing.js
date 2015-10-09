/**
 * Step 5
 * Where you write the generator specific files (routes, controllers, etc)
 */

const GIT_KEEP_FILES = [
  'api/adapters/.gitkeep',
  'test/unit/adapters/.gitkeep'
];

export default function () {
  GIT_KEEP_FILES.forEach(file => this.copy(file, file));
};
