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

    this.npmInstall('trailpack-' + server, {
      save: true
    }, (err) => {
      if (err)
        return

      const PROJECT_PATH = this.destinationRoot('node_modules/trailpack-' + server)
      if (!this.fs.exists(PROJECT_PATH) || !this.fs.exists(path.resolve(PROJECT_PATH, 'archetype'))) {
        throw new Error('No archetype exist')
      }

      this.fs.copy(path.resolve(PROJECT_PATH, 'archetype', '**'), this.destinationPath('api/policies'))
    });
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
    if (!this.options['skip-install']) {
      let trailsPackage = require(path.resolve(TRAILS_TEMPLATE, 'package.json'))
      this.fs.writeJSON(this.destinationPath('package.json'), trailsPackage)
    }

  }
};
