const chalk = require('chalk')

module.exports = {
  loadPackageInfo: function () {
    this.pkg = require('../../../package.json')
  },

  sayHello: function () {
    if (this.options['new']) {
      this.log('Creating a new', chalk.green('Trailpack'), '...')
    }
    else {
      this.log('Installing', chalk.green('Trailpacks'), this.options.packName)
    }
    this.log()
  }

}
