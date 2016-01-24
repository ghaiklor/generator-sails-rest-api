"use strict";

const assert = require('chai').assert;
const HashService = require('../../../api/services/HashService');

describe('services:HashService', () => {
  it('Should properly export', () => {
    assert.isObject(HashService);
  });
});
