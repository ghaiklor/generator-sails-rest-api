"use strict";

const path = require('path');
const assert = require('yeoman-assert');
const test = require('yeoman-test');

describe('sails-rest-api:swagger', () => {
  describe('Should properly scaffold swagger support with default configuration', () => {
    before(done => test.run(path.join(__dirname, '../../generators/swagger')).on('end', done));

    it('Should properly create api files', () => {
      assert.file([
        'config/swagger.js',
        'api/controllers/DocsController.js',
        'api/hooks/swagger/index.js',
        'api/hooks/swagger/lib/spec.js',
        'api/hooks/swagger/lib/xfmr.js'
      ]);
    });

    it('Should properly create explorer folder', () => {
      assert.file([
        'explorer'
      ]);
    })
  });
});
