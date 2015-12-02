const assert = require('assert')

describe('<%= name %> Model', () => {
  it('should exist', () => {
    assert(global.app.api.models.<%= fileName %>)
  })
})
