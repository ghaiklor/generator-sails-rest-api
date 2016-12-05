'use strict'

const path = require('path')
const assert = require('yeoman-assert')
const test = require('yeoman-test')

describe('trails:policy', () => {
  describe('Should properly generate policy interface', () => {
    before(() => {
      return test
        .run(path.join(__dirname, '../../src/policy'))
        .withArguments(['test'])
        .toPromise()
    })

    it('Should properly create policy files', () => {
      assert.file([
        'api/policies/Test.js'
      ])

    })

    it('Should properly create test files', () => {
      assert.file([
        'test/integration/policies/Test.test.js'
      ])

    })
  })
})
