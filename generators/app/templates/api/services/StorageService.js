var StorageFactory = require('./storage/StorageFactory');

module.exports = new StorageFactory().create("<%= answers['services:storage'].toLowerCase() %>");
module.exports.Factory = new StorageFactory();
