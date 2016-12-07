'use strict'

/**
 * Step 2
 * Where you prompt users for options (where you'd call this.prompt()).
 */

const questions = require('../questions')

module.exports = {
  askTrailpacks () {
    let done = this.async()
    this.prompt(questions, answers => {
      this.answers = Object.assign(this.answers || {}, answers)
      done()
    })
  }
}
