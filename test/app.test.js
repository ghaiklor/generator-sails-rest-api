var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');

describe('sails-rest-api:app', function () {
  before(function (done) {
    helpers
      .run(path.join(__dirname, '../generators/app'))
      .inDir(path.join(os.tmpdir(), './temp-test'))
      .withOptions({
        "skip-all": true,
        "verbose": true
      })
      .on('end', done);
  });

  // TODO: write normal tests for generator

  it('Should properly create root files', function () {
    assert.file([
      '.editorconfig',
      '.gitignore',
      '.sailsrc',
      'app.js',
      'package.json'
    ]);
  });
});
