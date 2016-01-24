"use strict";

const assert = require('chai').assert;
const blueprint = require('../../../api/blueprints/<%= name %>');

describe('blueprints:<%= name %>', () => {
  it('Should properly export', () => {
    assert.isFunction(blueprint);
  })
});
