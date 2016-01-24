"use strict";

const assert = require('chai').assert;
const StorageService = require('../../../api/services/StorageService');

describe('services:StorageService', () => {
  it('Should properly export', () => {
    assert.isObject(StorageService);
  });
});
