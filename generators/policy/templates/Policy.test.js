const assert = require('assert')

describe('<%= policyClass %>', () => {
  let <%= policyClass %>

  before(() => {
    <%= policyClass %> = global.app.policies.<%= policyClass %>
    assert(<%= policyClass %>)
  })
})

