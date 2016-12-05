'use strict'

const path = require('path')
const assert = require('yeoman-assert')
const test = require('yeoman-test')

describe('trails:controller', () => {
  describe('Should properly generate controller interface', () => {
    before(() => {
      return test
        .run(path.join(__dirname, '../../src/controller'))
        .withArguments(['test'])
        .toPromise()
    })

    it('Should properly create controller files', () => {
      assert.file([
        'api/controllers/TestController.js'
      ])

    })

    it('Should properly create test files', () => {
      assert.file([
        'test/integration/controllers/TestController.test.js'
      ])

    })
  })
})
