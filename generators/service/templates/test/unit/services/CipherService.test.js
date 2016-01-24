"use strict";

const assert = require('chai').assert;
const CipherService = require('../../../api/services/CipherService');

describe('services:CipherService', () => {
  it('Should properly export', () => {
    assert.isObject(CipherService);
  });
});
