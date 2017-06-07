module.exports = function () {
  if (this.options.new && this.answers.packName) {
    this.options.packName = this.answers.packName
  }
  if (!/^trailpack-/.test(this.options.packName)) {
    this.options.packName = `trailpack-${this.options.packName}`
  }
  if (!this.options.new) {
    const packs = this.options.packName + ',' + this.answers.packName
    this.options.packArray = packs.split(',').filter(p => p && p !== 'undefined')
  }

  this.options.packBasename = this.options.packName.replace(/^trailpack-/, '')
  this.options.description = this.answers.description
  this.options.githubAccount = this.answers.githubAccount
}
