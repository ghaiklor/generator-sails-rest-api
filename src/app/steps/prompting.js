'use strict'

/**
 * Step 2
 * Where you prompt users for options (where you'd call this.prompt()).
 */

const chalk = require('chalk')
const questions = require('../questions')

module.exports = {
  askWebServer: function () {
    let done = this.async()
    if (this.options.trailpacks) {
      done()
    }
    else {
      this.prompt(questions, answers => {
        this.answers = Object.assign(this.answers || {}, answers)
        done()
      })
    }
  }
}
