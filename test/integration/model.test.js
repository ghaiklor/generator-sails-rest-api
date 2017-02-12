'use strict'

const path = require('path')
const assert = require('yeoman-assert')
const test = require('yeoman-test')

describe('trails:model', () => {
  describe('Should properly generate model interface', () => {
    before(() => {
      return test
        .run(path.join(__dirname, '../../generators/model'))
        .withArguments(['test'])
        .toPromise()
    })

    it('Should properly create model files', () => {
      assert.file([
        'api/models/Test.js'
      ])

    })

    it('Should properly create test files', () => {
      assert.file([
        'test/unit/models/Test.test.js'
      ])

    })
  })
})
