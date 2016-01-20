"use strict";

const path = require('path');
const assert = require('yeoman-assert');
const test = require('yeoman-test');

describe('sails-rest-api:cron', () => {
  describe('Should properly scaffold empty cron configuration file', () => {
    before(done => test.run(path.join(__dirname, '../../generators/cron')).on('end', done));

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
        .run(path.join(__dirname, '../../generators/cron'))
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
