var fs = require('fs');

/**
 * Require all files within folder
 * @param {String} dirName Directory name
 * @returns {Object}
 */
module.exports = function requireFolder(dirName) {
    var files = fs.readdirSync(dirName),
        modules = {};

    for (var i = 0; i < files.length; i++) {
        modules[files[i].replace('.js', '')] = require(dirName + '/' + files[i]);
    }

    return modules;
};
