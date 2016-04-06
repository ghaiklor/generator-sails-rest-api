import path from 'path'
import os from 'os'
const fs = require('fs')
import { assert, test } from 'yeoman-generator'

describe('trails:app', () => {
  describe('Should create trails from trails/archetype', () => {
    before(done => {
      test
        .run(path.join(__dirname, '../../src/app'))
        .withPrompts({'web-engine': 'hapi', 'orm-engine': 'waterline', authorName: 'trailsjs', authorEmail: 'hello@trailsjs.io', license: 'MIT'}) // Mock the prompt answers
        .withOptions({
          'skip-update': true,
          'skip-install': true
        })
        .on('end', done)
    })

    it('Should properly create root files', () => {
      assert.file([
        '.trailsrc',
        '.editorconfig',
        '.gitignore',
        'index.js',
        'server.js',
        'api/index.js',
        'api/models/index.js',
        'api/services/index.js',
        'config/index.js',
        'config/database.js',
        'config/main.js',
        'config/footprints.js',
        'config/log.js',
        'config/policies.js',
        'config/routes.js',
        'config/session.js',
        'config/views.js',
        'config/web.js',
        'config/webpack.js',
        'config/env/testing.js',
        'config/env/staging.js',
        'config/env/production.js',
        'config/env/development.js',
        'config/env/index.js',
        'package.json',
        'LICENSE'
      ])
    })
  })
})
