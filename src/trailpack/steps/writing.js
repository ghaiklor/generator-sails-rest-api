/**
 * Step 5
 * Where you write the generator specific files (routes, controllers, etc)
 */

const path = require('path')

export default function () {

  const dest = this.destinationPath()
  const PROJECT_PATH = this.destinationPath('node_modules/')

  let trailpackNames = this['trailpacks-name'].split(',')
  let npmTrailpacks = trailpackNames.map(name => `${name}@latest`)

  this.npmInstall(npmTrailpacks, {
    save: true
  }, (err) => {
    if (err) {
      console.log(err)
      return
    }
    trailpackNames.forEach(item => {
      let ARCH = path.resolve(PROJECT_PATH + item, 'archetype', '**')
      this.fs.copy(ARCH, dest)
    })
  })
}
