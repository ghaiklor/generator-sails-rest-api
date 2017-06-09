const Util = require( '../../../lib/util')

module.exports = function () {
  this.options.policyName = Util.capitalizeFirstLetter(this.options['policy-name'])
  this.options.policyRoot = this.options.policyName.replace(/^(\w+)Policy$/, '$1')
  this.options.policyClass = `${this.options.policyRoot}Policy`
  this.options.policyFileName = `${this.options.policyRoot}Policy.js`
  this.options.policyTestFileName = `${this.options.policyRoot}Policy.test.js`
  this.options.policyDesc = this.answers.desc.trim()
}
