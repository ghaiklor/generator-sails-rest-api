var assert = require('assert'),
    CipherService = require('../../api/services/CipherService');

describe('Services:CipherService', function () {
    it('Should be factory function', function () {
        assert(typeof CipherService.create === 'function');
    });
});
