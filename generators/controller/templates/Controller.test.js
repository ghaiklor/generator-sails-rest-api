const assert = require('assert')

describe('<%= controllerClass %>', () => {
  let <%= controllerClass %>

  before(() => {
    <%= controllerClass %> = global.app.controllers.<%= controllerClass %>
    assert(<%= controllerClass %>)
  })
})

