/**
 * Step 5
 * Where you write the generator specific files (routes, controllers, etc)
 */

export default function () {
  this.directory('test', 'test');
  this.copy('app.js', 'app.js');
  this.copy('babelhook.js', 'babelhook.js');
  this.copy('Dockerfile', 'Dockerfile');
  this.copy('editorconfig', '.editorconfig');
  this.copy('gitignore', '.gitignore');
  this.copy('package.json', 'package.json');
  this.copy('README.md', 'README.md');
  this.copy('sailsrc', '.sailsrc');
};
