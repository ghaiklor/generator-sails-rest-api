"use strict";

const assert = require('chai').assert;
const sinon = require('sinon');
const Response = require('../../../api/responses/<%= name %>');

const context = {
  res: {
    status: sinon.spy(),
    jsonx: sinon.spy()
  }
};

describe('responses:<%= name %>', () => {
  it('Should be tested', () => {
    assert(false);
  })
});
