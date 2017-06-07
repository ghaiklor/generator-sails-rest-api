const assert = require('assert')

describe('<%= modelName %>', () => {
  let <%= modelName %>

  before(() => {
    <%= modelName %> = global.app.models.<%= modelName %>
    assert(<%= modelName %>)
  })
})

