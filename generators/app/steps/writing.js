/**
 * Step 5
 * Where you write the generator specific files (routes, controllers, etc)
 */

module.exports = {
  /**
   * Copy template directory to source root
   */
  copyDirectory: function () {
    this.directory(this.sourceRoot(), this.destinationRoot());
  }
};
