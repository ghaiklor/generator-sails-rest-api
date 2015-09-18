import path from 'path';
import os from 'os';
import { assert, test } from 'yeoman-generator';

describe('sails-rest-api:models', function () {
  this.timeout(10000);

  before(done => {
    test
      .run(path.join(__dirname, '../../generators/models'))
      .inDir(path.join(os.tmpdir(), './temp-test'))
      .on('end', done);
  });

  it('Should properly create root files', () => {
    assert.file([
      'api/models/User.js',
      'test/fixtures/FaultyUsers.json',
      'test/fixtures/Users.json',
      'test/unit/models/User.test.js'
    ]);
  });
});
