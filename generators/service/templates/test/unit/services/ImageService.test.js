"use strict";

const assert = require('chai').assert;
const ImageService = require('../../../api/services/ImageService');

describe('services:ImageService', () => {
  it('Should properly export', () => {
    assert.isObject(ImageService);
  });
});
