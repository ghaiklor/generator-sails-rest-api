var assert = require('chai').assert;
var ImageService = require('../../../api/services/ImageService');

describe('services:ImageService', function () {
  it('Should properly export', function () {
    assert.isObject(ImageService);
  });
});
