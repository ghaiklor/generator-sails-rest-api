"use strict";

const assert = require('chai');
const PusherService = require('../../../api/services/PusherService');

describe('services:PusherService', () => {
  it('Should properly export', () => {
    assert.isObject(PusherService);
  });
});
