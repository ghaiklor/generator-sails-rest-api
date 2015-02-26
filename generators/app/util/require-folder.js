var fs = require('fs');

module.exports = function requireFolder(dirname) {
    var files = fs.readdirSync(dirname),
        modules = {};

    files.forEach(function (file) {
        modules[file.replace('.js', '')] = require(dirname + '/' + file);
    });

    return modules;
};
