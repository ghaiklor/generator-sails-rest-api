const assert = require('assert')

describe('<%= serviceClass %>', () => {
  let <%= serviceClass %>

  before(() => {
    <%= serviceClass %> = global.app.services.<%= serviceClass %>
    assert(<%= serviceClass %>)
  })
})

