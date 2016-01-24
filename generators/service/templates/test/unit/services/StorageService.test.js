"use strict";

const assert = require('chai');
const StorageService = require('../../../api/services/StorageService');

describe('services:StorageService', () => {
  it('Should properly export', () => {
    assert.isObject(StorageService);
  });
});
