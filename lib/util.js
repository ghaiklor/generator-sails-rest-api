/* eslint no-console: 0 */
const fs = require('fs')
const path = require('path')
const falafel = require('falafel')
const pathExists = require('path-exists')
const detectConflict = require('detect-conflict')
const Conflicter = require('yeoman-generator/lib/util/conflicter')

const Util = module.exports = {

  /**
   * Monkey-patch to support index.js file updating without confirmation
   */
  patchConflicter () {
    Conflicter.prototype.collision = function (file, cb) {
      const rfilepath = path.relative(process.cwd(), file.path)
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
      }
      else {
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

  getMissingRequireStatements (fileNames, indexFile) {
    const requiredFiles = fileNames.filter(fileName => {
      return Util.hasRequireStatement(fileName, indexFile)
    })
    return Util.getRequireStatements(requiredFiles)
  },

  getRequireStatement (fileName) {
    return `exports.${fileName} = require('./${fileName}')\n`
  },

  getRequireStatements (fileNames) {
    return fileNames.reduce((js, fileName) => {
      return `${js}\nexports.${fileName} = require('./${fileName}')`
    }, '')
  },

  updateIndexFile ({ indexFile, requiredFiles, gen }) {
    // create index file if not present
    if (!gen.fs.exists(indexFile)) {
      return gen.fs.write(gen.destinationPath(indexFile), Util.getRequireStatements(requiredFiles))
    }

    // compile require statements not currently listed in the manifest
    const requireStmts = Util.getMissingRequireStatements(requiredFiles, gen.fs.read(indexFile))

    // write the new statements to the file
    gen.fs.write(indexFile, requireStmts)
  },

  getUpdatedIndexFile (fileName, fileContents) {
    const requireStatement = Util.getRequireStatement(fileName)
    const newFileContents = falafel(fileContents, node => {
      const src = node.source()
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
  },

  updateIndexesFolder (indexPath, folder) {
    fs.readdir(folder, (err, files) => {
      if (err) {
        console.error('Unable to read dir ' + folder, err)
        return
      }
      const indexContent = files
        .filter(f => f !== 'index.js')
        .reduce((str, file) => {
          const ext = path.extname(file)
          return str + Util.getRequireStatement(path.basename(file, ext))
        }, '')
      fs.writeFileSync(indexPath, indexContent)
    })
  },

  getUpdatedClassName (fileContents, name, type) {
    const newFileContents = falafel(fileContents, { ecmaVersion: 8 }, node => {
      if (node.type == 'Identifier' && node.parent.type == 'ClassExpression' &&
          node.parent.superClass.name == 'Trailpack' &&
          node.name == 'Archetype') {

        node.update(Util.getClassName(name, type))
      }
    })

    return newFileContents.toString()
  },

  getUpdatedTrailpackClass (fileContents, name) {
    const newFileContents = falafel(fileContents, { ecmaVersion: 8 }, node => {
      if (node.type == 'Identifier' && node.parent.type == 'ClassExpression' &&
          node.parent.superClass.name == 'Trailpack' &&
          node.name == 'Archetype') {

        node.update(Util.getTrailpackClassName(name))
      }
    })

    return newFileContents.toString()
  },

  capitalizeFirstLetter (word) {
    return word.charAt(0).toUpperCase() + word.slice(1)
  },

  /**
   * @param name
   */
  getClassName (name = '', type) {
    return `${Util.capitalizeFirstLetter(name)}${type}`
  },

  /**
   * @param name of the form trailpack-something
   */
  getTrailpackClassName (name = '') {
    const tpClassName = name.replace(/^trailpack-/, '')

    return `${Util.capitalizeFirstLetter(tpClassName)}Trailpack`
  }
}
