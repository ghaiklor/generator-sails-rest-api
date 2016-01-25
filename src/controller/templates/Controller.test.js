'use strict'
/* global describe, it */

const assert = require('assert')

describe('<%= name %>Controller', () => {
  it('should exist', () => {
    assert(global.app.api.controllers['<%= name %>Controller'])
  })
})
