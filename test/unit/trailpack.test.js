import path from 'path'
import os from 'os'
import fs from 'fs-extra'
import { assert, test } from 'yeoman-generator'

describe('trails:trailpack', () => {
  describe('Should properly install trailpack and his archetype', () => {
    /*
    before(done => {
      test
        .run(path.join(__dirname, '../../src/trailpack'))
        .withArguments(['trailpack-hapi'])
        .withOptions({
          'skip-update': true,
          'skip-install': false
        })
        .on('end', done)
    })*/

    it.skip('Should properly create trailpack files', () => {
      assert.file([
        'api/controllers/DefaultController.js',
        'api/controllers/ViewController.js',
        'api/controllers/index.js'
      ])
    })
  })
})
