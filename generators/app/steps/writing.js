const path = require('path')
const trailsArchetype = path.dirname(require.resolve('trails/archetype'))
const trailsPackage = require(path.resolve(trailsArchetype, 'package.json'))
const trailsSeries = trailsPackage.dependencies.trails

module.exports = {

  trailpackInstall () {
    let trailpacks = this.options.trailpacks
    const server = this.answers ? this.answers['web-engine'] : null
    const orm = this.answers ? this.answers['orm-engine'] : null
    const dest = this.destinationPath()
    const PROJECT_PATH = this.destinationPath('node_modules/')

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

    this.fs.delete(mainConfigFile)//Delete main.js to generate it from template

    this.fs.copyTpl(path.resolve(trailsArchetype, 'config', 'main.js'), mainConfigFile, {trailpacks: trailpackRequires})

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
        this.fs.copy(ARCH, dest)
      })
    })
  },

  copyArchetypeFiles() {
    this.fs.copy(path.resolve(trailsArchetype, '**'), this.destinationPath())
    this.fs.copy(path.resolve(trailsArchetype, '**/.*'), this.destinationPath())
  },

  pkg()  {
    // node:app generator will merge into this
    if (!this.options['skip-install']) {
      this.fs.writeJSON(this.destinationPath('package.json'), trailsPackage)
    }
  }
}
