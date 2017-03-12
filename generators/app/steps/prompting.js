'use strict'

/**
 * Step 2
 * Where you prompt users for options (where you'd call this.prompt()).
 */

const questions = require('../questions')

module.exports = function () {
  return this.prompt(questions).then(function (answers) {
    // To access props later use this.props.someAnswer
    this.answers = Object.assign(this.answers || {}, answers)
  }.bind(this))
}
