/**
 * Step 5
 * Where you write the generator specific files (routes, controllers, etc)
 */

const path = require('path')
const TRAILS_TEMPLATE = path.dirname(require.resolve('trails/archetype'))

export default {
  genericApi () {
    this.fs.copy(path.resolve(TRAILS_TEMPLATE, 'api/services', '**'), this.destinationPath('api/services'))
    this.fs.copy(path.resolve(TRAILS_TEMPLATE, 'api/models', '**'), this.destinationPath('api/models'))
  },
  serverDependentApi () {
    const server = this.answers['web-engine']
    let SERVER_TEMPLATE = null;
    try {
      SERVER_TEMPLATE = path.dirname(require.resolve('trailpack-' + server));

      // TODO: may be copy everything form `api` ?
      this.fs.copy(path.resolve(SERVER_TEMPLATE, 'archetype', 'api/controllers', '**'), this.destinationPath('api/controllers'))
      this.fs.copy(path.resolve(SERVER_TEMPLATE, 'archetype', 'api/policies', '**'), this.destinationPath('api/policies'))
    } catch(e) {
      // Nothing to copy need somehow to inform about this.
      var message = '** `trailpack-' + server + '` Not supporting for now **';
      this.log(Array(message.length + 1).join('*'))
      this.log(message)
      this.log(Array(message.length + 1).join('*'))
    }
  },
  config () {
    this.fs.copy(path.resolve(TRAILS_TEMPLATE, 'config', '**'), this.destinationPath('config'))
  },
  root () {
    this.fs.copy(path.resolve(TRAILS_TEMPLATE, '.trailsrc'), this.destinationPath('.trailsrc'))
    this.fs.copy(path.resolve(TRAILS_TEMPLATE, 'index.js'), this.destinationPath('index.js'))
    this.fs.copy(path.resolve(TRAILS_TEMPLATE, 'server.js'), this.destinationPath('server.js'))
    this.fs.copy(path.resolve(TRAILS_TEMPLATE, 'api/index.js'), this.destinationPath('api/index.js'))
  },
  pkg () {
    // node:app generator will merge into this
    let trailsPackage = require(path.resolve(TRAILS_TEMPLATE, 'package.json'))
    this.fs.writeJSON(this.destinationPath('package.json'), trailsPackage)
  }
};
