module.exports = function () {
  this.options.packArray = [ ]
  const loggerTrailpack = `trailpack-${this.options.logger}`

  this.options.packArray.push(loggerTrailpack)
}
