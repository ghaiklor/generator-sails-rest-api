const Util = require( '../../../lib/util')

module.exports = function () {
  this.options.modelName = Util.capitalizeFirstLetter(this.options['modelName'])
  this.options.modelRoot = this.options.modelName.replace(/^(\w+)/, '$1')
  this.options.modelFileName = `${this.options.modelRoot}.js`
  this.options.modelTestFileName = `${this.options.modelRoot}.test.js`
  this.options.modelDesc = this.answers.desc.trim()
}
