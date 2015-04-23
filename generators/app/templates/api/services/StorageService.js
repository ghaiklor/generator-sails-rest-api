var StorageFactory = require('./storage/StorageFactory');

module.exports = new StorageFactory().create("<%= answers['services:storage'] %>");
module.exports.Factory = new StorageFactory();
