const Util = require( '../../../lib/util')

module.exports = function () {
  this.options.serviceName = Util.capitalizeFirstLetter(this.options.serviceName)
  this.options.serviceRoot = this.options.serviceName.replace(/^(\w+)Service$/, '$1')
  this.options.serviceClass = `${this.options.serviceRoot}Service`
  this.options.serviceFileName = `${this.options.serviceRoot}Service.js`
  this.options.serviceTestFileName = `${this.options.serviceRoot}Service.test.js`
  this.options.serviceDesc = this.answers.desc.trim()
}
