'use strict'

const assert = require('assert')

describe('<%= name %> Model', () => {
  it('should exist', () => {
    assert(global.app.models.<%= fileName %>)
  })
})
