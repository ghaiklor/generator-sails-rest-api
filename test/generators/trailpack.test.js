const path = require('path')
const assert = require('yeoman-assert')
const test = require('yeoman-test')

describe('trails:trailpack', () => {
  describe('--install', () => {
    describe('should install an existing trailpack', () => {
      before(() => {
        return test
          .run(path.join(__dirname, '..', '..', 'generators', 'trailpack'))
          .inTmpDir()
          .withOptions({
            'skip-install': false
          })
          .withArguments(['trailpack-hapi'])
          .toPromise()
      })

      it('should properly create trailpack files', () => {
        assert.file([
          'api/controllers/index.js'
        ])
      })
    })
  })
  describe('--new', () => {
    describe('should generate a new trailpack (with trailpack- prefix)', () => {
      before(() => {
        return test
          .run(path.join(__dirname, '..', '..', 'generators', 'trailpack'))
          .inTmpDir()
          .withOptions({
            'new': true,
            'skip-install': false
          })
          .withArguments(['trailpack-gentest'])
          .toPromise()
      })

      it('should create trailpack files', () => {
        assert.file([
          'index.js',
          'README.md',
          'package.json'
        ])
      })
      it('should correctly name trailpack class', () => {
        assert.fileContent('index.js', /class GentestTrailpack/)
      })
      it('should correctly set "name" property in package.json', () => {
        assert.fileContent('package.json', /"name": "trailpack-gentest"/)
      })
      it('should set repo name in README', () => {
        assert.fileContent('README.md', /^# trailpack-gentest/)
      })

    })
    describe('should generate a new trailpack (without trailpack- prefix)', () => {
      before(() => {
        return test
          .run(path.join(__dirname, '..', '..', 'generators', 'trailpack'))
          .inTmpDir()
          .withOptions({
            'new': true,
            'skip-install': false
          })
          .withArguments(['gentest'])
          .toPromise()
      })

      it('should create trailpack files', () => {
        assert.file([
          'index.js',
          'README.md',
          'package.json'
        ])
      })
      it('should correctly name trailpack class', () => {
        assert.fileContent('index.js', /class GentestTrailpack/)
      })
      it('should correctly set "name" property in package.json', () => {
        assert.fileContent('package.json', /"name": "trailpack-gentest"/)
      })
      it('should set repo name in README', () => {
        assert.fileContent('README.md', /^# trailpack-gentest/)
      })

    })
  })
})
