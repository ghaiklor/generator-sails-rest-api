const path = require('path')
const Util = require('../../../lib/util')

module.exports = {
  createNew () {
    if (!this.options['new']) return

    const trailpackArchetype = path.dirname(require.resolve('trailpack/archetype'))
    //this.fs.copy(path.resolve(trailpackArchetype, '**'), this.destinationPath())
    this.fs.copyTpl(path.resolve(trailpackArchetype, '**'), this.destinationPath(), this.options)
    this.fs.copy(
      path.resolve(trailpackArchetype, 'test', '.eslintrc.json'),
      path.resolve(this.destinationPath(), 'test', '.eslintrc.json')
    )
    /*
    this.fs.copy(
      path.resolve(trailpackArchetype, '.gitignore'),
      path.resolve(this.destinationPath(), '.gitignore')
    )
    */

    const archetypePkg = this.fs.readJSON(this.destinationPath('package.json'))
    const newPkg = Object.assign({ name: this.options.packName }, archetypePkg)

    this.fs.writeJSON(this.destinationPath('package.json'), newPkg)

    const classArchetype = this.fs.read(path.resolve(trailpackArchetype, 'index.js'))
    const classUpdated = Util.getUpdatedTrailpackClass(classArchetype, this.options.packName)

    this.fs.write(this.destinationPath('index.js'), classUpdated)


    return this.npmInstall(null, { save: true, progress: false, silent: true })
  }
}
