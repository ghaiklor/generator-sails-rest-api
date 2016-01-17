import path from 'path'
import falafel from 'falafel'
import pathExists from 'path-exists'
import detectConflict from 'detect-conflict'
import Conflicter from 'yeoman-generator/lib/util/conflicter'

const Util = module.exports = {

  /**
   * Monkey-patch to support index.js file updating without confirmation
   */
    patchConflicter () {
    Conflicter.prototype.collision = function (file, cb) {
      var rfilepath = path.relative(process.cwd(), file.path)
      if (!pathExists.sync(file.path)) {
        this.adapter.log.create(rfilepath)
        cb('create')
        return
      }
      else if (/index.js$/.test(file.path)) {
        this.adapter.log.force(rfilepath)
        cb('force')
        return
      }

      if (this.force) {
        this.adapter.log.force(rfilepath)
        cb('force')
        return
      }
      if (detectConflict(file.path, file.contents)) {
        this.adapter.log.conflict(rfilepath)
        this._ask(file, cb)
      } else {
        this.adapter.log.identical(rfilepath)
        cb('identical')
      }
    }
  },

  isRequire (node) {
    return node.type === 'CallExpression' &&
      node.callee.type === 'Identifier' &&
      node.callee.name === 'require'
  },

  hasRequireStatement (fileName, fileContents) {
    let exists = false

    falafel(fileContents, node => {
      if (Util.isRequire(node)) {
        if (node.arguments[0].value == `./${fileName}`) {
          exists = true
        }
      }
    })

    return exists
  },

  getRequireStatement (fileName) {
    return `exports.${fileName} = require('./${fileName}')\n`
  },

  getUpdatedIndexFile (fileName, fileContents) {
    let requireStatement = Util.getRequireStatement(fileName)
    let newFileContents = falafel(fileContents, node => {
      let src = node.source()
      if (node.type === 'Program' && !node.parent) {
        if (!src) {
          node.update(requireStatement)
        }
        else {
          node.update(src + requireStatement)
        }
      }
    })

    return newFileContents.toString()
  }
}
