'use strict'

const path = require('path')
const assert = require('yeoman-assert')
const test = require('yeoman-test')

describe('trails:trailpack', () => {
  describe('Should properly install trailpack and his archetype', () => {
    before(() => {
      return test
        .run(path.join(__dirname, '..', '..', 'src', 'trailpack'))
        .withArguments(['trailpack-hapi'])
        .withOptions({
          'skip-update': true,
          'skip-install': false
        })
        .toPromise()
    })

    it('Should properly create trailpack files', () => {
      assert.file([
        'api/controllers/DefaultController.js',
        'api/controllers/ViewController.js',
        'api/controllers/index.js'
      ])
    })
  })
})
