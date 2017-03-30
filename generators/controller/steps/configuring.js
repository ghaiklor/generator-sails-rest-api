const Util = require( '../../../lib/util')

module.exports = function () {
  this.options.controllerName = Util.capitalizeFirstLetter(this.options['controller-name'])
  this.options.controllerRoot = this.options.controllerName.replace(/^(\w+)Controller$/, '$1')
  this.options.controllerFileName = `${this.options.controllerRoot}Controller.js`
  this.options.controllerTestFileName = `${this.options.controllerRoot}Controller.test.js`
  this.options.controllerDesc = this.answers.desc.trim()
}
