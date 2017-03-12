'use strict'

const assert = require('assert')

describe('<%= fileName %>', () => {
  it('should exist', () => {
    assert(global.app.services.<%= fileName %>)
  })
})
