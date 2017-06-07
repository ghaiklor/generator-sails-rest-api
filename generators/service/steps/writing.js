const Util = require( '../../../lib/util')
const path = require('path')

module.exports = {
  setup () {
    Util.patchConflicter()
  },

  writeFiles () {
    this.fs.copyTpl(
      this.templatePath('Service.js'),
      this.destinationPath(path.join('api/services', this.options.serviceFileName)),
      this.options)

    this.fs.copyTpl(
      this.templatePath('Service.test.js'),
      this.destinationPath(path.join('test/unit/services', this.options.serviceTestFileName)),
      this.options)
  },

  modifyIndexFiles () {
    return Util.updateIndexFile({
      indexFile: 'api/services/index.js',
      requiredFiles: [ this.options.serviceFileName ],
      gen: this
    })
  }
}
