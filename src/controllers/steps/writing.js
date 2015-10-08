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
    .forEach(controller => {
      if (FILES_MAP[controller]) {
        FILES_MAP[controller].forEach(path => this.copy(path, path));
      } else {
        controller = controller.charAt(0).toUpperCase() + controller.slice(1);
        this.template('api/controllers/Controller.template', `api/controllers/${controller}Controller.js`, {
          name: controller
        });
        this.template('test/unit/controllers/Controller.template', `test/unit/controllers/${controller}Controller.test.js`, {
          name: controller
        });
      }
    });
};
