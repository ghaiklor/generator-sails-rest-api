'use strict'

/**
 * Step 5
 * Where you write the generator specific files (routes, controllers, etc)
 */

const path = require('path')
const Util = require('@trails/generator-util').util

module.exports = function () {

  const dest = this.destinationPath()
  const PROJECT_PATH = this.destinationPath('node_modules/')
  const indexPath = path.resolve(dest, 'config', 'index.js')

  const trailpackNames = this.options.trailpacks.split(',')
  const npmTrailpacks = trailpackNames.map(name => name.indexOf('@') == -1 ? `${name}@latest` : name)

  this.npmInstall(npmTrailpacks, {
    save: true,
    silent: true,
    loglevel: 'silent'
  }, (err) => {
    if (err) {
      throw err
    }
    trailpackNames.forEach(item => {
      const ARCH = path.resolve(PROJECT_PATH + item, 'archetype', '**')
      this.fs.copy(ARCH, dest)
    })
    //FIXME is there a better way for doing this ???
    this.fs.commit(function () {
      Util.updatedIndexesFolder(indexPath, path.resolve(dest, 'config'), ['locales'])
    }.bind(this))
  })
}
