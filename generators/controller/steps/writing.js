const Util = require( '../../../lib/util')
const path = require('path')

module.exports = {
  setup () {
    Util.patchConflicter()
  },

  writeFiles () {

    this.fs.copyTpl(
      this.templatePath('Controller.js'),
      this.destinationPath(path.join('api/controllers', this.options.controllerFileName)),
      this.options)

    this.fs.copyTpl(
      this.templatePath('Controller.test.js'),
      this.destinationPath(path.join('test/integration/controllers', this.options.controllerTestFileName)),
      this.options)
  },

  modifyIndexFiles () {
    Util.updateIndexFile({
      indexFile: 'api/controllers/index.js',
      requiredFiles: [ this.options.controllerFileName ],
      gen: this
    })
  }
}
