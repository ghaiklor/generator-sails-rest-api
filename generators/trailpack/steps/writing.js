const path = require('path')
const Util = require('../../../lib/util')
const TRAILS_TEMPLATE = path.dirname(require.resolve('trailpack/archetype'))

module.exports = {
  create () {
    if (!this.options.new) return

    this.fs.copy(path.resolve(TRAILS_TEMPLATE, '**'), this.destinationPath())

    const archetypePkg = this.fs.readJSON(this.destinationPath('package.json'))
    const newPkg = Object.assign({ name: this.options.packName }, archetypePkg)

    this.fs.writeJSON(this.destinationPath('package.json'), newPkg)

    const classArchetype = this.fs.read(path.resolve(TRAILS_TEMPLATE, 'index.js'))
    const classUpdated = Util.getUpdatedTrailpackClass(classArchetype, this.options.packName)

    this.fs.write(this.destinationPath('index.js'), classUpdated)

    this.fs.copyTpl(path.resolve(TRAILS_TEMPLATE, 'README.md'), this.destinationPath('README.md'), {
      name: this.options.packName,
      description: this.options.description,
      githubAccount: this.options.githubAccount
    })
  },

  install () {
    if (this.options['new']) return

    const dest = this.destinationPath()
    const PROJECT_PATH = this.destinationPath('node_modules/')
    const indexPath = path.resolve(dest, 'config', 'index.js')

    return this.npmInstall(this.options.packArray, { save: true, progress: false, silent: true }, (err) => {
      if (err) throw err
      try {
        this.options.packArray.forEach(pack => {
          const ARCH = path.resolve(PROJECT_PATH + pack, 'archetype', '**')
          this.fs.copy(ARCH, dest)
        })
      }
      catch (e) {
        //
      }
      this.fs.commit(function () {
        Util.updateIndexesFolder(indexPath, path.resolve(dest, 'config'))
      }.bind(this))
    })
  }
}
