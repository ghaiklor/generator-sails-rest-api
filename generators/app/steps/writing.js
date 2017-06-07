const path = require('path')
//const Util = require('../../../lib/util')
const trailsArchetype = path.dirname(require.resolve('trails/archetype'))
const trailsPackage = require(path.resolve(trailsArchetype, 'package.json'))
const trailsSeries = trailsPackage.dependencies.trails

module.exports = {

  genericApi () {
    this.fs.copy(path.resolve(trailsArchetype, 'api/services', '**'), this.destinationPath('api/services'))
    this.fs.copy(path.resolve(trailsArchetype, 'api/models', '**'), this.destinationPath('api/models'))
  },

  trailpackInstall () {
    const fs = this.fs
    fs.copy(path.resolve(trailsArchetype, 'config', '**'), this.destinationPath('config'))

    let trailpacks = this.options.trailpacks
    const server = this.answers ? this.answers['web-engine'] : null
    const orm = this.answers ? this.answers['orm-engine'] : null
    const dest = this.destinationPath()
    const PROJECT_PATH = this.destinationPath('node_modules/')
    //const indexPath = path.resolve(dest, 'config', 'index.js')

    if (!trailpacks) {
      trailpacks = server == 'other' ? this.answers['web-engine-other'] : 'trailpack-' + server
      if (orm && orm != 'none') {
        trailpacks += ',' + (orm == 'other' ? this.answers['orm-engine-other'] : 'trailpack-' + orm)
        if (this.answers['footprints']) {
          trailpacks += ',' + 'trailpack-footprints'
        }
      }
    }

    trailpacks = (trailpacks || '').replace(/,/g, ' ')

    const trailpackNames = trailpacks.split(' ')

    let trailpackRequires = ''
    trailpackNames.forEach(item => {
      trailpackRequires += item + '\'),\n    require(\''
    })

    trailpackRequires = trailpackRequires.substring(trailpackRequires.length - 17, trailpackRequires)
    const mainConfigFile = path.resolve(dest, 'config', 'main.js')

    fs.delete(mainConfigFile)//Delete main.js to generate it from template

    fs.copyTpl(path.resolve(trailsArchetype, 'config', 'main.js'), mainConfigFile, {trailpacks: trailpackRequires})

    const npmTrailpacks = trailpackNames.map(name => `${name}@${trailsSeries}`)

    if (server == 'express') {
      if (this.answers['express-version'] == '4') {
        npmTrailpacks.push('express@4')
      }
      else if (this.answers['express-version'] == '5') {
        npmTrailpacks.push('express@5.0.0-alpha.3') //Replace by express@5 when is out of alpha
      }
      else {
        npmTrailpacks.push(`express@${this.answers['express-version-other']}`)
      }
    }

    this.npmInstall(npmTrailpacks, {
      save: true,
      silent: true,
      loglevel: 'error'
    }, (err) => {
      if (err) {
        throw err
      }
      trailpackNames.forEach(item => {
        const ARCH = path.resolve(PROJECT_PATH, item, 'archetype', '**')
        fs.copy(ARCH, dest)
      })
    })
  },

  root() {
    this.fs.copy(path.resolve(trailsArchetype, '.gitignore'), this.destinationPath('.gitignore'))
    this.fs.copy(path.resolve(trailsArchetype, 'README.md'), this.destinationPath('README.md'))
    this.fs.copy(path.resolve(trailsArchetype, 'index.js'), this.destinationPath('index.js'))
    this.fs.copy(path.resolve(trailsArchetype, 'server.js'), this.destinationPath('server.js'))
    this.fs.copy(path.resolve(trailsArchetype, 'api/index.js'), this.destinationPath('api/index.js'))
    this.fs.copy(path.resolve(trailsArchetype, 'test', '**'), this.destinationPath('test'))
    this.fs.copy(path.resolve(trailsArchetype, 'test', '.*'), this.destinationPath('test'))
  },

  pkg()  {
    // node:app generator will merge into this
    if (!this.options['skip-install']) {
      this.fs.writeJSON(this.destinationPath('package.json'), trailsPackage)
    }
  }
}
