import path from 'path';
import os from 'os';
import { assert, test } from 'yeoman-generator';

describe('trails:app', () => {
  describe('Should create trails from trails/archetype', () => {
    before(done => {
      test
        .run(path.join(__dirname, '../../src/app'))
        .withPrompts({'web-engine': 'hapi', authorName: 'trailsjs', authorEmail: 'hello@trailsjs.io', license: 'MIT'}) // Mock the prompt answers
        .withOptions({
          'skip-update': true,
          'skip-install': true
        })
        .on('end', done)
    });

    it('Should properly create root files', () => {
      assert.file([
        'index.js',
        'server.js',
        'api/index.js',
        'config/index.js',
        'config/main.js',
        'package.json',
        'README.md'
      ]);
    });
  });
});
