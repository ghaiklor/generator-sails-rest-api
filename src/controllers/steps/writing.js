/**
 * Step 5
 * Where you write the generator specific files (routes, controllers, etc)
 */

const FILES_MAP = {
  ping: ['api/controllers/PingController.js', 'test/unit/controllers/PingController.test.js'],
  search: ['api/controllers/SearchController.js', 'test/unit/controllers/SearchController.test.js']
};

export default function () {
  this
    .options['controllers']
    .split(',')
    .map(controller => controller.replace(/Controller/g, '').toLowerCase())
    .forEach(controller => FILES_MAP[controller].forEach(path => this.copy(path, path)));
};
