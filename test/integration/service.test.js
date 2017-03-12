'use strict'

const path = require('path')
const assert = require('yeoman-assert')
const test = require('yeoman-test')

describe('trails:service', () => {
  describe('Should properly generate service interface', () => {
    before(() => {
      return test
        .run(path.join(__dirname, '../../generators/service'))
        .withArguments(['test'])
        .toPromise()
    })

    it('Should properly create service files', () => {
      assert.file([
        'api/services/TestService.js'
      ])

    })

    it('Should properly create test files', () => {
      assert.file([
        'test/unit/services/TestService.test.js'
      ])

    })
  })
})
