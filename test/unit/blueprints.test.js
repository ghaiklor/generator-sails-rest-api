import path from 'path';
import os from 'os';
import { assert, test } from 'yeoman-generator';

describe('sails-rest-api:blueprints', function () {
  this.timeout(10000);

  before(done => {
    test
      .run(path.join(__dirname, '../../generators/blueprints'))
      .inDir(path.join(os.tmpdir(), './temp-test'))
      .on('end', done);
  });

  it('Should properly create root files', () => {
    assert.file([
      'api/blueprints/add.js',
      'api/blueprints/create.js',
      'api/blueprints/destroy.js',
      'api/blueprints/find.js',
      'api/blueprints/findone.js',
      'api/blueprints/populate.js',
      'api/blueprints/remove.js',
      'api/blueprints/update.js',
      'test/unit/blueprints/add.test.js',
      'test/unit/blueprints/create.test.js',
      'test/unit/blueprints/destroy.test.js',
      'test/unit/blueprints/find.test.js',
      'test/unit/blueprints/findone.test.js',
      'test/unit/blueprints/populate.test.js',
      'test/unit/blueprints/remove.test.js',
      'test/unit/blueprints/update.test.js'
    ]);
  });
});
