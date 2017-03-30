const assert = require('assert')

describe('<%= controllerName %>Controller', () => {
  let <%= controllerName %>
  before(() => {
    <%= controllerName %> = global.app.controllers.<%= controllerName %>
    assert(controllerName)
  })
})
