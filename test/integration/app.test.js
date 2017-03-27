'use strict'

const path = require('path')
const assert = require('yeoman-assert')
const test = require('yeoman-test')
const TrailsApp = require('trails')

describe('trails:app', () => {
  describe('Should create trails based on Hapi/Waterline from trails/archetype', () => {
    let tmpDir
    before(() => {
      return test
        .run(path.join(__dirname, '..', '..', 'generators', 'app'))
        .inTmpDir(dir => {
          tmpDir = dir
        })
        .withPrompts({
          'web-engine': 'hapi',
          'orm-engine': 'waterline',
          footprints: true,
          authorName: 'trailsjs',
          authorEmail: 'hello@trailsjs.io',
          license: 'MIT'
        }) // Mock the prompt answers
        .withOptions({
          'skip-update': true,
          'skip-install': false
        })
        .toPromise()
    })

    it('Should properly create root files', () => {
      assert.file([
        //'.editorconfig',
        //'.gitignore',
        'index.js',
        'server.js',
        'api/index.js',
        'api/models/index.js',
        'api/services/index.js',
        'config/index.js',
        'config/stores.js',
        'config/main.js',
        'config/log.js',
        'config/routes.js',
        'config/web.js',
        'config/env/testing.js',
        'config/env/staging.js',
        'config/env/production.js',
        'config/env/development.js',
        'config/env/index.js',
        'test/integration/TrailsApp.test.js',
        'test/setup.js',
        'test/mocha.opts',
        'test/.eslintrc.json',
        'package.json',
        //'LICENSE'
      ])
    })
    it('Should properly start', done => {
      const trailsApp = new TrailsApp(require(tmpDir))
      const stop = () => {
        return trailsApp.stop().then(_ => {
          done()
        }).catch(done)
      }
      trailsApp.start().then(stop).catch(stop)
    })
  })

  describe('Should create trails based on Express/Waterline from trails/archetype', () => {
    let tmpDir
    before(() => {
      return test
        .run(path.join(__dirname, '..', '..', 'generators', 'app'))
        .inTmpDir(dir => {
          tmpDir = dir
        })
        .withPrompts({
          'web-engine': 'express',
          'express-version': '4',
          'orm-engine': 'waterline',
          authorName: 'trailsjs',
          authorEmail: 'hello@trailsjs.io',
          license: 'MIT'
        }) // Mock the prompt answers
        .withOptions({
          'skip-update': true,
          'skip-install': false
        })
        .toPromise()
    })

    it('Should properly create root files', () => {
      assert.file([
        //'.editorconfig',
        //'.gitignore',
        'index.js',
        'server.js',
        'api/index.js',
        'api/models/index.js',
        'api/services/index.js',
        'config/index.js',
        'config/stores.js',
        'config/main.js',
        'config/log.js',
        'config/routes.js',
        'config/web.js',
        'config/env/testing.js',
        'config/env/staging.js',
        'config/env/production.js',
        'config/env/development.js',
        'config/env/index.js',
        'test/integration/TrailsApp.test.js',
        'test/setup.js',
        'test/mocha.opts',
        'test/.eslintrc.json',
        'package.json',
        //'LICENSE'
      ])
    })
    it('Should properly start', done => {
      const trailsApp = new TrailsApp(require(tmpDir))
      const stop = () => {
        return trailsApp.stop().then(_ => {
          done()
        }).catch(done)
      }
      trailsApp.start().then(stop).catch(stop)
    })
  })
})
