"use strict";

const assert = require('chai').assert;
const SocialService = require('../../../api/services/SocialService');

describe('services:SocialService', () => {
  it('Should properly export', () => {
    assert.isObject(SocialService);
  });
});
