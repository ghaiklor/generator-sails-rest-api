/**
 * Step 5
 * Where you write the generator specific files (routes, controllers, etc)
 */

export default {
  copyDirectory: function () {
    this.directory(this.sourceRoot(), this.destinationRoot());
  }
};
