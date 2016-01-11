/**
 * Step 5
 * Where you write the generator specific files (routes, controllers, etc)
 */

const fs = require('fs')
const path = require('path')
const TRAILS_TEMPLATE = path.dirname(require.resolve('trails/archetype'))

export default {
  genericApi () {
    this.fs.copy(path.resolve(TRAILS_TEMPLATE, 'api/services', '**'), this.destinationPath('api/services'))
    this.fs.copy(path.resolve(TRAILS_TEMPLATE, 'api/models', '**'), this.destinationPath('api/models'))
  },
  serverDependentApi () {
    let trailpacks = this.options.trailpacks
    const server = this.answers ? this.answers['web-engine'] : null
    const dest = this.destinationPath()

    if (!trailpacks) {
      trailpacks = server == 'other' ? this.answers['web-engine-other'] : 'trailpack-' + server
    }

    trailpacks = trailpacks.replace(/,/g, ' ')

    const trailpackNames = trailpacks.split(' ')

    const PROJECT_PATH = this.destinationPath('node_modules/')
    this.npmInstall(trailpacks, {
      save: true
    }, (err) => {
      if (err) {
        console.log(err)
        return
      }
      let ARCH
      let trailpackRequires = ''
      trailpackNames.forEach(item => {
        ARCH = path.resolve(PROJECT_PATH + item, 'archetype', '**')
        trailpackRequires += item + '\'), \nrequire(\''
        this.fs.copy(ARCH, dest)
      })

      trailpackRequires = trailpackRequires.substring(trailpackRequires.length - 14, trailpackRequires)
      const mainConfigFile = dest + '/config/main.js'

      this.fs.delete(mainConfigFile)//Delete main.js to generate it from template
      this.fs.commit(function(){
        this.fs.copyTpl(path.resolve(TRAILS_TEMPLATE, 'config', 'main.js'), mainConfigFile, {trailpacks: trailpackRequires})
      }.bind(this))

    });
  },
  config()
  {
    this.fs.copy(path.resolve(TRAILS_TEMPLATE, 'config', '**'), this.destinationPath('config'))
  },
  root()
  {
    this.fs.copy(path.resolve(TRAILS_TEMPLATE, '.trailsrc'), this.destinationPath('.trailsrc'))
    this.fs.copy(path.resolve(TRAILS_TEMPLATE, 'index.js'), this.destinationPath('index.js'))
    this.fs.copy(path.resolve(TRAILS_TEMPLATE, 'server.js'), this.destinationPath('server.js'))
    this.fs.copy(path.resolve(TRAILS_TEMPLATE, 'api/index.js'), this.destinationPath('api/index.js'))
  },
  pkg()
  {
    // node:app generator will merge into this
    if (!this.options['skip-install']) {
      let trailsPackage = require(path.resolve(TRAILS_TEMPLATE, 'package.json'))
      this.fs.writeJSON(this.destinationPath('package.json'), trailsPackage)
    }
  }
};
