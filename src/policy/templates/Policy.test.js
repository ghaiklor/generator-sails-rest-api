const assert = require('assert')

describe('<%= name %>', () => {
  it('should exist', () => {
    assert(global.app.api.policies.<%= fileName %>)
  })
})
