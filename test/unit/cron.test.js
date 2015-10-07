import path from 'path';
import os from 'os';
import { assert, test } from 'yeoman-generator';

describe('sails-rest-api:cron', () => {
  describe('Should properly handle default configuration', () => {
    before(done => {
      test
        .run(path.join(__dirname, '../../src/cron'))
        .on('end', done);
    });

    it('Should properly create api files', () => {
      assert.file([
        //'api/cron/.gitkeep'
      ]);
    });

    it('Should properly create test files', () => {
      assert.file([
        //'test/unit/cron/.gitkeep'
      ]);
    });
  });
});
