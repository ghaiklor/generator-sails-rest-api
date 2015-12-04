/**
 * Step 5
 * Where you write the generator specific files (routes, controllers, etc)
 */

const path = require('path')
const TRAILS_TEMPLATE = path.dirname(require.resolve('trails/archetype'))

export default {
  genericApi () {
    this.log(this.answers)
    this.fs.copy(path.resolve(TRAILS_TEMPLATE, 'api/services', '**'), this.destinationPath('api/services'))
    this.fs.copy(path.resolve(TRAILS_TEMPLATE, 'api/models', '**'), this.destinationPath('api/models'))
  },
  serverDependentApi () {
    let server = this.answers['web-engine']
    this.fs.copy(path.resolve(TRAILS_TEMPLATE, 'api/controllers', server, '**'), this.destinationPath('api/controllers'))
    this.fs.copy(path.resolve(TRAILS_TEMPLATE, 'api/policies', server, '**'), this.destinationPath('api/policies'))
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
