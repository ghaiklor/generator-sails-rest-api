import path from 'path';
import os from 'os';
import { assert, test } from 'yeoman-generator';

describe('sails-rest-api:app', function () {
  this.timeout(10000);

  before(done => {
    test
      .run(path.join(__dirname, '../../generators/app'))
      .inDir(path.join(os.tmpdir(), './temp-test'))
      .withOptions({
        "skip-all": true,
        "verbose": true
      })
      .on('end', done);
  });

  it('Should properly create root files', () => {
    assert.file([
      'test/bootstrap.js',
      'test/mocha.opts',
      '.editorconfig',
      '.gitignore',
      '.sailsrc',
      'app.js',
      'Dockerfile',
      'package.json'
    ]);
  });
});
