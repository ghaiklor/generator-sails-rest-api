"use strict";

const assert = require('chai').assert;
const Service = require('../../../api/services/<%= name %>Service');

describe('services:<%= name %>Service', () => {
  it('Should properly export', () => {
    assert.isObject(Service);
  });
});
