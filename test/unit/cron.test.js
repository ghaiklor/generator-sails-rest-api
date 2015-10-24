import path from 'path';
import os from 'os';
import { assert, test } from 'yeoman-generator';

describe('sails-rest-api:cron', () => {
  describe('Should properly scaffold empty cron configuration file', () => {
    before(done => test.run(path.join(__dirname, '../../src/cron')).on('end', done));

    it('Should properly create configuration files', () => {
      assert.file([
        'config/cron.js'
      ]);

      assert.noFileContent('config/cron.js', /testJob:/);
    });
  });

  describe('Should properly scaffold cron configuration file with predefined jobs', () => {
    before(done => {
      test
        .run(path.join(__dirname, '../../src/cron'))
        .withArguments(['testJob', 'anotherJob'])
        .on('end', done)
    });

    it('Should properly create configuration files', () => {
      assert.file([
        'config/cron.js'
      ]);

      assert.fileContent('config/cron.js', /'testJob':/);
      assert.fileContent('config/cron.js', /'anotherJob':/);
    });
  });
});
