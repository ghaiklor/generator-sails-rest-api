const assert = require('assert')

describe('<%= fileName %>', () => {
  it('should exist', () => {
    assert(global.app.api.services.<%= fileName %>)
  })
})
