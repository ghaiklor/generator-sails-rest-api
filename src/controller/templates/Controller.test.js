'use strict'

const assert = require('assert')

describe('<%= name %>Controller', () => {
  it('should exist', () => {
    assert(global.app.controllers.<%= name %>Controller)
  })
})
