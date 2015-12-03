/**
 * Step 5
 * Where you write the generator specific files (routes, controllers, etc)
 */

const path = require('path')
const TRAILS_TEMPLATE = path.dirname(require.resolve('trails/archetype'))

export default {
  api () {
    this.fs.copy(path.resolve(TRAILS_TEMPLATE, 'api', '**'), this.destinationPath('api'))
  },
  config () {
    this.fs.copy(path.resolve(TRAILS_TEMPLATE, 'config', '**'), this.destinationPath('config'))
  },
  root () {
    this.fs.copy(path.resolve(TRAILS_TEMPLATE, 'index.js'), this.destinationPath('index.js'))
    this.fs.copy(path.resolve(TRAILS_TEMPLATE, 'server.js'), this.destinationPath('server.js'))
  },
  pkg () {
    // node:app generator will merge into this
    let trailsPackage = require(path.resolve(TRAILS_TEMPLATE, 'package.json'))
    this.fs.writeJSON(this.destinationPath('package.json'), trailsPackage)
  }
};
