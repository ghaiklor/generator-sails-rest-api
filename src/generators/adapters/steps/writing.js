/**
 * Step 5
 * Where you write the generator specific files (routes, controllers, etc)
 */

module.exports = {
  copyDirectory: function () {
    this.directory(this.sourceRoot(), this.destinationRoot());
  }
};
