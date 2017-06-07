const Util = require( '../../../lib/util')
const path = require('path')

module.exports = {
  setup () {
    Util.patchConflicter()
  },

  writeFiles () {
    //console.log('model options', this.options)
    this.fs.copyTpl(
      this.templatePath('Model.js'),
      this.destinationPath(path.join('api/models', this.options.modelFileName)),
      this.options)
    this.fs.copyTpl(
      this.templatePath('Resolver.js'),
      this.destinationPath(path.join('api/resolvers', this.options.modelFileName)),
      this.options)

    this.fs.copyTpl(
      this.templatePath('Model.test.js'),
      this.destinationPath(path.join('test/unit/models', this.options.modelTestFileName)),
      this.options)
  },

  modifyIndexFiles () {
    Util.updateIndexFile({
      indexFile: 'api/models/index.js',
      requiredFiles: [ this.options.modelFileName ],
      gen: this
    })
  }
}
