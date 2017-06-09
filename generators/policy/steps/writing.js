const Util = require( '../../../lib/util')
const path = require('path')

module.exports = {
  setup () {
    Util.patchConflicter()
  },

  writeFiles () {

    this.fs.copyTpl(
      this.templatePath('Policy.js'),
      this.destinationPath(path.join('api/policies', this.options.policyFileName)),
      this.options)

    this.fs.copyTpl(
      this.templatePath('Policy.test.js'),
      this.destinationPath(path.join('test/integration/policies', this.options.policyTestFileName)),
      this.options)
  },

  modifyIndexFiles () {
    Util.updateIndexFile({
      indexFile: 'api/policies/index.js',
      requiredFiles: [ this.options.policyFileName ],
      gen: this
    })
  }
}
