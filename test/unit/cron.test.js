import path from 'path';
import os from 'os';
import { assert, test } from 'yeoman-generator';

describe('sails-rest-api:cron', () => {
  describe('Should properly generate cron configuration file', () => {
    before(done => test.run(path.join(__dirname, '../../src/cron')).on('end', done));

    it('Should properly create configuration files', () => {
      assert.file([
        'config/cron.js'
      ]);
    });
  });
});
